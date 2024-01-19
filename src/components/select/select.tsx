import React from 'react';
import {
  Select as RacSelect,
  SelectValue as RacSelectValue,
  type SelectProps as RacSelectProps,
  type SelectValueProps as RacSelectValueProps,
  Label,
  Popover
} from 'react-aria-components';
import { List } from '../list/list';

export type SelectProps = RacSelectProps<React.ReactElement>;

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <RacSelect ref={ref} {...props}>
        {({}) => (
          <>
            // TODO: Use md-field
            <></>
            <Popover>
              <List>
                <>{children}</>
              </List>
            </Popover>
          </>
        )}
      </RacSelect>
    );
  }
);

Select.displayName = 'Select';
