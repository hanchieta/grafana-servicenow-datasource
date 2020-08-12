import { DataQuery, getBackendSrv } from './grafana';

type SERVICE_NOW_QUERY_TABLE_NAME = `incident` | 'change_request';
type SERVICE_NOW_QUERY_TYPE = `table` | 'stats';
type SERVICE_NOW_QUERY_RESULT_FORMAT = `table` | 'time_series';
type SERVICE_NOW_URL_PARAM = 'sysparm_display_value' | 'sysparm_limit' | 'sysparm_fields' | 'sysparm_query' | 'sysparm_count' | 'sysparm_group_by';
type SERVICE_NOW_QUERY_ORDER_BY_DIRECTION = `asc` | `desc`;

class ServiceNowQueryURLParam {
  key: SERVICE_NOW_URL_PARAM;
  value: string;
  constructor(key: SERVICE_NOW_URL_PARAM, value: any) {
    this.key = key;
    this.value = value.toString();
  }
  getValue() {
    return [this.key, this.value].join('=');
  }
}

export class ServiceNowQuery {
  table: SERVICE_NOW_QUERY_TABLE_NAME = 'incident';
  type: SERVICE_NOW_QUERY_TYPE = 'table';
  resultFormat: SERVICE_NOW_QUERY_RESULT_FORMAT = 'table';
  fields: string;
  query: string;
  orderBy: string;
  orderByDirection: SERVICE_NOW_QUERY_ORDER_BY_DIRECTION = 'asc';
  groupBy: string;
  limit: number;
  constructor(options: any) {
    this.table = options.table || 'incident';
    this.type = options.type || 'table';
    this.resultFormat = options.resultFormat || 'table';
    this.fields = options.fields || '';
    this.query = options.query || '';
    this.orderByDirection = options.orderByDirection || 'asc';
    this.orderBy = options.orderBy || '';
    this.groupBy = options.groupBy || '';
    this.limit = options.limit || 25;
  }
  getUrl(): string {
    const URL_PARAMS: ServiceNowQueryURLParam[] = [];
    URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_display_value`, 'all'));
    URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_limit`, this.limit || 10));
    if (this.fields && this.fields !== '*') {
      URL_PARAMS.push(
        new ServiceNowQueryURLParam(
          `sysparm_fields`,
          this.fields || 'opened_at,number,short_description,sys_created_by,severity,category,state,priority'
        )
      );
    }
    const query = (this.query + '')
      .trim()
      .replace(/\^\n/g, '^')
      .replace(/\n/g, '^');
    const sysparmQueries = [query].filter(Boolean);
    if (this.orderBy) {
      sysparmQueries.push((this.orderByDirection === 'asc' ? 'ORDERBY' : 'ORDERBYDESC') + this.orderBy.trim());
    }
    if (sysparmQueries.length > 0) {
      URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_query`, sysparmQueries.join('^')));
    }
    if (this.type === 'stats') {
      URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_count`, 'true'));
    }
    if (this.type === 'stats' && this.groupBy) {
      URL_PARAMS.push(new ServiceNowQueryURLParam(`sysparm_group_by`, this.groupBy.trim()));
    }
    return `/api/now/${this.type || 'table'}/${this.table}?${URL_PARAMS.map(v => v.getValue()).join('&')}`;
  }
}

export interface ServiceNowPluginQuery extends DataQuery {
  servicenow?: ServiceNowQuery;
}

export const DEFAULT_SERVICENOW_QUERY = new ServiceNowQuery({
  table: 'incident',
  type: 'table',
  fields: 'opened_at,number,short_description,sys_created_by,severity,category,state,priority',
  query: '',
  groupBy: '',
  orderBy: 'opened_at',
  orderByDirection: 'desc',
  resultFormat: 'time_series',
  limit: 10,
});

export const doServiceNowRequest = (url: string, serviceNowQuery: ServiceNowQuery, maxRetries = 1): Promise<any> => {
  return getBackendSrv()
    .datasourceRequest({ method: 'GET', url: url })
    .catch((error: any) => {
      console.log(error);
      if (maxRetries > 0) {
        return doServiceNowRequest(url, serviceNowQuery, maxRetries - 1);
      }
      throw error;
    });
};