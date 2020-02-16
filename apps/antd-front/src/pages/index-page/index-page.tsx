import { Entities, EntityProperties } from '@usedz/usedz-common';
import React from 'react';
import { Link } from 'react-router-dom';
import './index-page.scss';

// export interface Props {}

export const IndexPage: React.FunctionComponent /* <Props> */ = (/* props: Props */) => {
  return (
    <div>
      {Object.values(Entities).map((entity: EntityProperties) => (
        <Link to={`/usedz/${entity.pluralName}`} key={entity.name}>
          <div className="entity-item">
            <span>{entity.capitalizedPluralName}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};
