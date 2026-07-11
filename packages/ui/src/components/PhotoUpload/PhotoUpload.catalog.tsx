import { useState } from 'react';
import { View } from 'react-native';

import { PhotoUpload } from './PhotoUpload';
import { Example } from '../catalogHelpers';

export const title = 'Photo Upload';

function Controlled() {
  const [hasFile, setHasFile] = useState(false);
  return (
    <PhotoUpload
      hasFile={hasFile}
      pageCount={29}
      onUploadFile={() => setHasFile(true)}
      onCapturePhoto={() => setHasFile(true)}
      onRemove={() => setHasFile(false)}
    />
  );
}

export default function PhotoUploadCatalog() {
  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Example
        name="Default (click Upload File to preview)"
        groups={[
          { element: 'Dropzone background', vars: ['--color-primary-50'] },
          { element: 'Upload icon', vars: ['--color-primary-600'] },
          { element: 'Action buttons', vars: ['reuses Button (secondary variant)'] },
          { element: 'Spacing', vars: ['--space-16', '--space-8', '--border-radius-8'] },
        ]}
      >
        <Controlled />
      </Example>
      <Example
        name="After Upload"
        groups={[
          { element: 'Preview border', vars: ['--color-primary-600'] },
          { element: 'Page-count tag', vars: ['--color-neutral-100 (background)', '--color-neutral-600 (text)'] },
          { element: 'Remove button', vars: ['reuses IconButton (secondary variant)'] },
        ]}
      >
        <PhotoUpload hasFile pageCount={29} onRemove={() => {}} />
      </Example>
    </View>
  );
}
