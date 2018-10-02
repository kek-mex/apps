// Copyright 2017-2018 @polkadot/ui-app authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { CodecTypes } from '@polkadot/types/types';
import { BareProps } from '../types';

// FIXME Ideally, we want these as Base from api-codec - as a stop-gap, any this until we have
// params returning types extending Base (i.e. anything from api-codec)
export type RawParam$Value = any | undefined;

export type RawParam$ValueArray = Array<RawParam$Value | Array<RawParam$Value>>;

export type RawParam$Values = RawParam$Value | RawParam$ValueArray;

export type RawParam = {
  isValid: boolean,
  type: CodecTypes,
  value: RawParam$Values,
}

export type RawParam$OnChange$Value = { isValid: boolean, value: RawParam$Values };
export type RawParam$OnChange = (value: RawParam$OnChange$Value) => void;

export type RawParams = Array<RawParam>;

export type BaseProps = BareProps & {
  defaultValue: RawParam,
  name: string,
  onChange?: RawParam$OnChange
};

export type Props = BaseProps & {
  isDisabled?: boolean,
  isError?: boolean,
  isReadOnly?: boolean,
  label: string,
  withLabel?: boolean
};

export type Size = 'full' | 'large' | 'medium' | 'small';

export type ComponentMap = {
  [index: string]: React.ComponentType<Props> | [React.ComponentType<Props>, React.ComponentType<Props>]
};
