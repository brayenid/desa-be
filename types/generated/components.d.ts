import type { Schema, Struct } from '@strapi/strapi';

export interface BigCategoryBigCategory extends Struct.ComponentSchema {
  collectionName: 'components_big_category_big_categories';
  info: {
    description: '';
    displayName: 'Big Category';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_images';
  info: {
    description: '';
    displayName: 'Images';
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface BlocksMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_markdowns';
  info: {
    description: '';
    displayName: 'Markdown';
    icon: 'quote';
  };
  attributes: {
    markdown: Schema.Attribute.Blocks;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'apps';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
  };
}

export interface BudgetApbDes extends Struct.ComponentSchema {
  collectionName: 'components_budget_apb_des';
  info: {
    description: '';
    displayName: 'APBDes';
    icon: 'key';
  };
  attributes: {
    expenditure: Schema.Attribute.Component<'budget.expenditure', false>;
    financing: Schema.Attribute.Component<'budget.reception', true>;
    income: Schema.Attribute.Component<'budget.income', false>;
    url: Schema.Attribute.String;
  };
}

export interface BudgetExpenditure extends Struct.ComponentSchema {
  collectionName: 'components_budget_expenditures';
  info: {
    description: '';
    displayName: 'Expenditure';
    icon: 'check';
  };
  attributes: {
    communityDev: Schema.Attribute.Integer;
    communityEmpowerment: Schema.Attribute.Integer;
    emergencyExpenditure: Schema.Attribute.Integer;
    govExpenditure: Schema.Attribute.Integer;
    villageDevelopment: Schema.Attribute.Integer;
  };
}

export interface BudgetIncome extends Struct.ComponentSchema {
  collectionName: 'components_budget_incomes';
  info: {
    description: '';
    displayName: 'Income';
    icon: 'check';
  };
  attributes: {
    miscIncome: Schema.Attribute.Integer;
    originalIncome: Schema.Attribute.Integer;
    transferIncome: Schema.Attribute.Integer;
  };
}

export interface BudgetReception extends Struct.ComponentSchema {
  collectionName: 'components_budget_receptions';
  info: {
    description: '';
    displayName: 'Reception';
    icon: 'check';
  };
  attributes: {
    label: Schema.Attribute.String;
    role: Schema.Attribute.Enumeration<['Penerimaan', 'Pengeluaran']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Penerimaan'>;
    total: Schema.Attribute.Integer;
  };
}

export interface ElementMission extends Struct.ComponentSchema {
  collectionName: 'components_element_missions';
  info: {
    description: '';
    displayName: 'Mission';
    icon: 'bulletList';
  };
  attributes: {
    mission: Schema.Attribute.String;
  };
}

export interface FooterContactsLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts_links';
  info: {
    description: '';
    displayName: 'Urgents Contacts';
    icon: 'headphone';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'filter';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'footer.contacts-link', true>;
    socials: Schema.Attribute.Component<'footer.social-media', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    description: '';
    displayName: 'Social Media';
    icon: 'apps';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['instagram', 'facebook', 'twitter', 'whatsapp', 'tiktok', 'youtube']
    >;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface JumbotronJumbo extends Struct.ComponentSchema {
  collectionName: 'components_jumbotron_jumbos';
  info: {
    description: '';
    displayName: 'jumbo';
    icon: 'alien';
  };
  attributes: {
    bigImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface JumbotronJumbotron extends Struct.ComponentSchema {
  collectionName: 'components_jumbotron_jumbotrons';
  info: {
    description: '';
    displayName: 'Jumbotron';
    icon: 'alien';
  };
  attributes: {
    jumbotron: Schema.Attribute.Component<'jumbotron.jumbo', false>;
  };
}

export interface NavigationNavigasi extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigasis';
  info: {
    description: '';
    displayName: 'Navigation';
    icon: 'bulletList';
  };
  attributes: {
    navigation: Schema.Attribute.Component<'navigation.navigasi-atas', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface NavigationNavigasiAtas extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigasi_atas';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'bulletList';
  };
  attributes: {
    children: Schema.Attribute.Component<'navigation.sub-navigasi-atas', true>;
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface NavigationSubNavigasiAtas extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_navigasi_atas';
  info: {
    description: '';
    displayName: 'Sub Link';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
    path: Schema.Attribute.String;
  };
}

export interface ResidentBasedOnAge extends Struct.ComponentSchema {
  collectionName: 'components_resident_based_on_ages';
  info: {
    displayName: 'Based On Age';
    icon: 'doctor';
  };
  attributes: {
    age: Schema.Attribute.Integer;
    total: Schema.Attribute.Integer;
  };
}

export interface ResidentBasedOnJob extends Struct.ComponentSchema {
  collectionName: 'components_resident_based_on_jobs';
  info: {
    displayName: 'Based On Job';
    icon: 'crown';
  };
  attributes: {
    job: Schema.Attribute.String;
    total: Schema.Attribute.Integer;
  };
}

export interface ResidentBasedOnMaritality extends Struct.ComponentSchema {
  collectionName: 'components_resident_based_on_maritalities';
  info: {
    displayName: 'Based On Maritality';
    icon: 'user';
  };
  attributes: {
    maritality: Schema.Attribute.String;
    total: Schema.Attribute.Integer;
  };
}

export interface ResidentBasedOnReligion extends Struct.ComponentSchema {
  collectionName: 'components_resident_based_on_religions';
  info: {
    description: '';
    displayName: 'Based On Religion';
    icon: 'emotionHappy';
  };
  attributes: {
    religion: Schema.Attribute.String;
    total: Schema.Attribute.Integer;
  };
}

export interface ResidentMaritality extends Struct.ComponentSchema {
  collectionName: 'components_resident_maritalities';
  info: {
    description: '';
    displayName: 'Based On Education';
    icon: 'feather';
  };
  attributes: {
    education: Schema.Attribute.Enumeration<
      ['SD Sederajat', 'SMP Sederajat', 'SMA Sederajat', 'S1', 'S2', 'S3']
    >;
    total: Schema.Attribute.Integer;
  };
}

export interface SgdsSgDs extends Struct.ComponentSchema {
  collectionName: 'components_sgds_sg_ds';
  info: {
    displayName: 'SGDs';
    icon: 'apps';
  };
  attributes: {
    indicator: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface SpeechChiefSpeech extends Struct.ComponentSchema {
  collectionName: 'components_speech_chief_speeches';
  info: {
    displayName: 'Chief Speech';
    icon: 'emotionHappy';
  };
  attributes: {
    speech: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'big-category.big-category': BigCategoryBigCategory;
      'blocks.image': BlocksImage;
      'blocks.markdown': BlocksMarkdown;
      'blocks.rich-text': BlocksRichText;
      'budget.apb-des': BudgetApbDes;
      'budget.expenditure': BudgetExpenditure;
      'budget.income': BudgetIncome;
      'budget.reception': BudgetReception;
      'element.mission': ElementMission;
      'footer.contacts-link': FooterContactsLink;
      'footer.footer': FooterFooter;
      'footer.social-media': FooterSocialMedia;
      'jumbotron.jumbo': JumbotronJumbo;
      'jumbotron.jumbotron': JumbotronJumbotron;
      'navigation.navigasi': NavigationNavigasi;
      'navigation.navigasi-atas': NavigationNavigasiAtas;
      'navigation.sub-navigasi-atas': NavigationSubNavigasiAtas;
      'resident.based-on-age': ResidentBasedOnAge;
      'resident.based-on-job': ResidentBasedOnJob;
      'resident.based-on-maritality': ResidentBasedOnMaritality;
      'resident.based-on-religion': ResidentBasedOnReligion;
      'resident.maritality': ResidentMaritality;
      'sgds.sg-ds': SgdsSgDs;
      'speech.chief-speech': SpeechChiefSpeech;
    }
  }
}
