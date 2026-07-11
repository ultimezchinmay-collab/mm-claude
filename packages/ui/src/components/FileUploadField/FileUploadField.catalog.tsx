import { View } from 'react-native';
import { File01Icon, Image01Icon } from '@hugeicons/core-free-icons';

import { FileUploadField } from './FileUploadField';
import { Example } from '../catalogHelpers';

export const title = 'Upload Field';

const labelVars = ['--color-neutral-600', '--color-white-900 (label backdrop)', '--type-family-primary', '--type-weight-medium-500', '--caption', '--type-lh-caption', '--color-primary-600 (required *)'];
const spacingVars = ['--space-12', '--space-8', '--space-4', '--border-radius-8'];

function groups(border: string, hasFile: boolean, helper?: string) {
  const g = [
    { element: 'Label text', vars: labelVars },
    { element: 'Border', vars: [border, '--border-radius-8'] },
    { element: 'Leading icon', vars: ['--color-neutral-500'] },
    { element: 'Value text', vars: hasFile
      ? ['--color-neutral-900', '--type-weight-bold-700', '--label', '--type-lh-label']
      : ['--color-neutral-500 (placeholder)', '--type-weight-medium-500', '--label', '--type-lh-label'] },
    { element: 'Upload / Re-Upload action', vars: ['--color-primary-600', '--type-weight-bold-700', '--label', '--type-lh-label'] },
    { element: 'Spacing', vars: spacingVars },
  ];
  if (helper) g.push({ element: 'Helper text', vars: [helper, '--type-weight-medium-500', '--caption', '--type-lh-caption'] });
  return g;
}

export default function FileUploadFieldCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Upload Image / Default" groups={groups('--color-neutral-300', false)}>
        <FileUploadField label="Label" required placeholder="Select Image" icon={Image01Icon} onPress={() => {}} />
      </Example>
      <Example name="Upload Image / Success" groups={groups('--color-success-600', true, '--color-success-600')}>
        <FileUploadField label="Label" required fileName="QD.jpg" icon={Image01Icon} status="success" helperText="Uploaded successfully" onPress={() => {}} />
      </Example>
      <Example name="Upload Image / Error" groups={groups('--color-error-600', true, '--color-error-600')}>
        <FileUploadField label="Label" required fileName="QD.tsx" icon={Image01Icon} status="error" helperText="File not supported" onPress={() => {}} />
      </Example>
      <Example name="Upload Document / Default" groups={groups('--color-neutral-300', false, '--color-neutral-500')}>
        <FileUploadField
          label="Label"
          required
          placeholder="Upload Document"
          icon={File01Icon}
          helperText="Supported file information"
          onPress={() => {}}
        />
      </Example>
      <Example name="Disabled" groups={groups('--color-neutral-100', false)}>
        <FileUploadField label="Label" required placeholder="Select Image" icon={Image01Icon} disabled onPress={() => {}} />
      </Example>
    </View>
  );
}
