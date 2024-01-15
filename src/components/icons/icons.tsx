import { ForEach } from '../logical/ForEach';
import { Icon } from '../icon/icon';
import { icons } from './icon-names';
import React from 'react';

export const Icons: React.FC<{}> = () => {
  return (
    <div className="flex flex-col">
      <ForEach data={icons}>
        {icon => (
          <div className="p-4 flex-1 flex items-center gap-4">
            <Icon key={icon} name={icon} className="" />
            <span>{icon}</span>
          </div>
        )}
      </ForEach>
    </div>
  );
};
