import { useState } from 'react';
import { View } from 'react-native';

import { Chip } from './Chip';
import { Example } from '../catalogHelpers';

export const title = 'Chip';

// Chip wraps react-native-paper's Chip, which resolves its label/icon/background/
// border colors from theme roles (surface, onSurfaceVariant, outline,
// secondaryContainer, onSecondaryContainer) that aren't defined in
// tokens/colors.ts — same pre-existing gap as Card. Documented honestly.
const note = (role: string) => [`Paper MD3 default: ${role} (not wired to our tokens)`];

function groups(bgRole: string, borderRole: string, labelRole: string) {
  return [
    { element: 'Label text', vars: note(labelRole) },
    { element: 'Icon', vars: note('onSurfaceVariant') },
    { element: 'Background', vars: note(bgRole) },
    { element: 'Border', vars: [...note(borderRole), '--border-radius-8 (roundness, ours)'] },
  ];
}

/** Real toggle — click to select/unselect, proving the chip actually responds to interaction. */
function ToggleChip() {
  const [selected, setSelected] = useState(false);
  return <Chip label={selected ? 'Selected' : 'Default'} selected={selected} onPress={() => setSelected((s) => !s)} />;
}

function RemovableChip() {
  const [visible, setVisible] = useState(true);
  if (!visible) return <Chip label="Removed — reload to reset" disabled />;
  return <Chip label="With icon" icon="check" onClose={() => setVisible(false)} />;
}

export default function ChipCatalog() {
  return (
    <View style={{ padding: 16 }}>
      <Example name="Default / Selected (click to toggle)" groups={groups('surface / secondaryContainer', 'outline', 'onSurfaceVariant / onSecondaryContainer')}>
        <ToggleChip />
      </Example>
      <Example name="Disabled" groups={groups('surface (dimmed)', 'outline (dimmed)', 'onSurfaceVariant (dimmed)')}>
        <Chip label="Disabled" disabled />
      </Example>
      <Example
        name="With icon (click x to remove)"
        groups={groups('surface', 'outline', 'onSurfaceVariant')}
      >
        <RemovableChip />
      </Example>
    </View>
  );
}
