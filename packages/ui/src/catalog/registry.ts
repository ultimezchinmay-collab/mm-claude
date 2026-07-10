import type { ComponentType } from 'react';

import ColorsCatalog, { title as colorsTitle } from '../tokens/colors.catalog';
import SpacingCatalog, { title as spacingTitle } from '../tokens/spacing.catalog';
import RadiiCatalog, { title as radiiTitle } from '../tokens/radii.catalog';
import TypographyTokensCatalog, { title as typographyTokensTitle } from '../tokens/typography.catalog';
import CssVariablesCatalog, { title as cssVariablesTitle } from '../tokens/cssVariables.catalog';

import ButtonCatalog, { title as buttonTitle } from '../components/Button/Button.catalog';
import IconButtonCatalog, { title as iconButtonTitle } from '../components/Button/IconButton.catalog';
import CardCatalog, { title as cardTitle } from '../components/Card/Card.catalog';
import ChipCatalog, { title as chipTitle } from '../components/Chip/Chip.catalog';
import TextFieldCatalog, { title as textFieldTitle } from '../components/TextField/TextField.catalog';
import TextAreaCatalog, { title as textAreaTitle } from '../components/TextArea/TextArea.catalog';
import PasswordFieldCatalog, { title as passwordFieldTitle } from '../components/PasswordField/PasswordField.catalog';
import SearchFieldCatalog, { title as searchFieldTitle } from '../components/SearchField/SearchField.catalog';
import DropdownCatalog, { title as dropdownTitle } from '../components/Dropdown/Dropdown.catalog';
import MultiSelectDropdownCatalog, {
  title as multiSelectDropdownTitle,
} from '../components/MultiSelectDropdown/MultiSelectDropdown.catalog';
import DatePickerCatalog, { title as datePickerTitle } from '../components/DatePicker/DatePicker.catalog';
import TimePickerCatalog, { title as timePickerTitle } from '../components/TimePicker/TimePicker.catalog';
import TypographyCatalog, { title as typographyTitle } from '../components/Typography/Typography.catalog';

export interface CatalogEntry {
  section: 'Foundations' | 'Components';
  name: string;
  Component: ComponentType;
}

export const catalogEntries: CatalogEntry[] = [
  { section: 'Foundations', name: colorsTitle, Component: ColorsCatalog },
  { section: 'Foundations', name: spacingTitle, Component: SpacingCatalog },
  { section: 'Foundations', name: radiiTitle, Component: RadiiCatalog },
  { section: 'Foundations', name: typographyTokensTitle, Component: TypographyTokensCatalog },
  { section: 'Foundations', name: cssVariablesTitle, Component: CssVariablesCatalog },

  { section: 'Components', name: buttonTitle, Component: ButtonCatalog },
  { section: 'Components', name: iconButtonTitle, Component: IconButtonCatalog },
  { section: 'Components', name: cardTitle, Component: CardCatalog },
  { section: 'Components', name: chipTitle, Component: ChipCatalog },
  { section: 'Components', name: textFieldTitle, Component: TextFieldCatalog },
  { section: 'Components', name: textAreaTitle, Component: TextAreaCatalog },
  { section: 'Components', name: passwordFieldTitle, Component: PasswordFieldCatalog },
  { section: 'Components', name: searchFieldTitle, Component: SearchFieldCatalog },
  { section: 'Components', name: dropdownTitle, Component: DropdownCatalog },
  { section: 'Components', name: multiSelectDropdownTitle, Component: MultiSelectDropdownCatalog },
  { section: 'Components', name: datePickerTitle, Component: DatePickerCatalog },
  { section: 'Components', name: timePickerTitle, Component: TimePickerCatalog },
  { section: 'Components', name: typographyTitle, Component: TypographyCatalog },
];
