import { useState } from 'react';
import { View } from 'react-native';

import { MultiImageUpload } from './MultiImageUpload';
import { Example } from '../catalogHelpers';

export const title = 'Multi Image Upload';

function Controlled() {
  const [count, setCount] = useState(5);
  return (
    <MultiImageUpload
      count={count}
      maxImages={5}
      onAddImage={() => setCount((c) => Math.min(c + 1, 5))}
      onRemoveImage={() => setCount((c) => Math.max(c - 1, 0))}
    />
  );
}

export default function MultiImageUploadCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example
        name="Default (click a thumbnail's delete icon, or Add Image)"
        groups={[
          { element: 'Thumbnail border', vars: ['--color-primary-600 (first/cover) / --color-neutral-50'] },
          { element: 'Delete button', vars: ['--color-error-600 (background)', '--color-white-900 (icon)'] },
          { element: 'Counter text', vars: ['--color-neutral-900', '--type-weight-medium-500', '--label'] },
          { element: 'Add Image button', vars: ['reuses Button (secondary variant)'] },
          { element: 'Spacing', vars: ['--space-16', '--space-4', '--border-radius-8'] },
        ]}
      >
        <Controlled />
      </Example>
    </View>
  );
}
