import React, { PureComponent } from 'react';
import { onInputTextChange } from './../../utils';
import { ServiceNowFieldsListCtrl } from './Help/FieldsListHelp';

export class ServiceNowQueryGroupByCtrl extends PureComponent<any, any> {
  render() {
    const query = this.props.query;
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <label className="gf-form-label width-8" title="Group By Field">
              Group By
            </label>
            <input
              className="gf-form-input width-24"
              type="text"
              onChange={e => onInputTextChange(e, 'groupBy', this.props, true)}
              value={query.servicenow.groupBy.join(',')}
              placeholder="Comma separated fields list. Use 'Choose' option if you don't know the field names"
              title="Comma separated fields list. Use 'Choose' option if you don't know the field names"
            ></input>
            <ServiceNowFieldsListCtrl onChange={this.props.onChange} query={query} datasource={this.props.datasource} fieldName="groupBy" />
          </div>
        </div>
      </div>
    );
  }
}
