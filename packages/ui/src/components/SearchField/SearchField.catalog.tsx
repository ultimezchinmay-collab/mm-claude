import { useState } from 'react';
import { View } from 'react-native';

import { SearchField, type SearchFieldProps } from './SearchField';
import { Example } from '../catalogHelpers';

export const title = 'Search Field';

const spacingVars = ['--space-12', '--space-8', '--border-radius-8'];

function groups(border: string) {
  return [
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Search icon', vars: ['--color-neutral-500'] },
    { element: 'Value text', vars: ['--color-neutral-900 (typed) / --color-neutral-500 (placeholder)', '--type-weight-medium-500', '--label', '--type-lh-label'] },
    { element: 'Spacing', vars: spacingVars },
  ];
}

function Controlled(props: Partial<SearchFieldProps>) {
  const [value, setValue] = useState('');
  return (
    <SearchField value={value} onChangeText={setValue} placeholder="Search by Location" {...props} />
  );
}

export default function SearchFieldCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default" groups={groups('--color-neutral-100')}>
        <Controlled />
      </Example>
      <Example name="Hover" groups={groups('--color-neutral-300 (self-authored hover)')}>
        <Controlled previewState="hover" />
      </Example>
      <Example name="Focused" groups={groups('--color-secondary-600')}>
        <Controlled previewState="focused" />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100')}>
        <Controlled disabled />
      </Example>
    </View>
  );
}
