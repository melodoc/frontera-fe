import { useTranslation } from 'react-i18next';

import { IDropDownItem, UIDropDown } from 'shared/components/ui-drop-down/ui-drop-down';
import { Language } from 'shared/config/i18n/i18n';

const languageItems = [
  { id: '1', value: Language.English, label: 'EN', isSelected: false },
  { id: '2', value: Language.Russian, label: 'RU', isSelected: false }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  let defaultTitle = languageItems[0].label;
  const items = languageItems.map((item) => {
    if (item.value === i18n.language) {
      defaultTitle = item.label;
      return {
        ...item,
        isSelected: true
      };
    }
    return item;
  });

  const onSelected = (item: IDropDownItem) => {
    item.value && i18n.changeLanguage(item.value);
  };

  return <UIDropDown defaultTitle={defaultTitle} items={items} onSelected={onSelected} />;
};
