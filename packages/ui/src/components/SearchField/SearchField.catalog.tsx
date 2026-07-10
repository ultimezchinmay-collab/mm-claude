import { useState } from 'react';
import { View } from 'react-native';

import { SearchField, type SearchFieldProps } from './SearchField';
import { Example } from '../catalogHelpers';

export const title = 'Search Field';

const vars = ['--space-12', '--space-8', '--border-radius-8', '--type-weight-medium-500', '--label', '--type-lh-label'];

function Controlled(props: Partial<SearchFieldProps>) {
  const [value, setValue] = useState('');
  return (
    <SearchField value={value} onChangeText={setValue} placeholder="Search by Location" {...props} />
  );
}

export default function SearchFieldCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example vars={['--color-neutral-100', ...vars]}>
        <Controlled />
      </Example>
      <Example vars={['--color-neutral-300 (self-authored hover)', ...vars]}>
        <Controlled previewState="hover" />
      </Example>
      <Example vars={['--color-secondary-600', ...vars]}>
        <Controlled previewState="focused" />
      </Example>
      <Example vars={['--color-neutral-100 (disabled)', ...vars]}>
        <Controlled disabled />
      </Example>
    </View>
  );
}
