export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type About = Entity & Node & {
  __typename?: 'About';
  body?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<About>;
  featuredImage?: Maybe<Media>;
  heading?: Maybe<Scalars['String']['output']>;
  /** List of About versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  mobileCtAs: Array<Link>;
  mobileDescription?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo?: Maybe<PageMetaSeo>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AboutCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type AboutFeaturedImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type AboutMobileCtAsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkWhereInput>;
};


export type AboutPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AboutSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AboutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutConnection = {
  __typename?: 'AboutConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutCreateInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  featuredImage?: InputMaybe<MediaCreateOneInlineInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  mobileCtAs?: InputMaybe<LinkCreateManyInlineInput>;
  mobileDescription?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<PageMetaSeoCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AboutCreateManyInlineInput = {
  /** Connect multiple existing About documents */
  connect?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Create and connect multiple existing About documents */
  create?: InputMaybe<Array<AboutCreateInput>>;
};

export type AboutCreateOneInlineInput = {
  /** Connect one existing About document */
  connect?: InputMaybe<AboutWhereUniqueInput>;
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>;
};

/** An edge in a connection. */
export type AboutEdge = {
  __typename?: 'AboutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: About;
};

/** Identifies documents */
export type AboutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutWhereStageInput>;
  featuredImage?: InputMaybe<MediaWhereInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mobileCtAs_every?: InputMaybe<LinkWhereInput>;
  mobileCtAs_none?: InputMaybe<LinkWhereInput>;
  mobileCtAs_some?: InputMaybe<LinkWhereInput>;
  mobileDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mobileDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mobileDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mobileDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mobileDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mobileDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mobileDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mobileDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mobileDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mobileDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AboutOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MobileDescriptionAsc = 'mobileDescription_ASC',
  MobileDescriptionDesc = 'mobileDescription_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AboutUpdateInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  featuredImage?: InputMaybe<MediaUpdateOneInlineInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  mobileCtAs?: InputMaybe<LinkUpdateManyInlineInput>;
  mobileDescription?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<PageMetaSeoUpdateOneInlineInput>;
};

export type AboutUpdateManyInlineInput = {
  /** Connect multiple existing About documents */
  connect?: InputMaybe<Array<AboutConnectInput>>;
  /** Create and connect multiple About documents */
  create?: InputMaybe<Array<AboutCreateInput>>;
  /** Delete multiple About documents */
  delete?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Disconnect multiple About documents */
  disconnect?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing About documents */
  set?: InputMaybe<Array<AboutWhereUniqueInput>>;
  /** Update multiple About documents */
  update?: InputMaybe<Array<AboutUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple About documents */
  upsert?: InputMaybe<Array<AboutUpsertWithNestedWhereUniqueInput>>;
};

export type AboutUpdateManyInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  mobileDescription?: InputMaybe<Scalars['String']['input']>;
};

export type AboutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutUpdateManyInput;
  /** Document search */
  where: AboutWhereInput;
};

export type AboutUpdateOneInlineInput = {
  /** Connect existing About document */
  connect?: InputMaybe<AboutWhereUniqueInput>;
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>;
  /** Delete currently connected About document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected About document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single About document */
  update?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>;
  /** Upsert single About document */
  upsert?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>;
};

export type AboutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutUpdateInput;
  /** Unique document search */
  where: AboutWhereUniqueInput;
};

export type AboutUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutCreateInput;
  /** Update document if it exists */
  update: AboutUpdateInput;
};

export type AboutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutUpsertInput;
  /** Unique document search */
  where: AboutWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AboutWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AboutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutWhereStageInput>;
  featuredImage?: InputMaybe<MediaWhereInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mobileCtAs_every?: InputMaybe<LinkWhereInput>;
  mobileCtAs_none?: InputMaybe<LinkWhereInput>;
  mobileCtAs_some?: InputMaybe<LinkWhereInput>;
  mobileDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mobileDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mobileDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mobileDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mobileDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mobileDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mobileDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mobileDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mobileDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mobileDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AboutWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AboutWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References About record uniquely */
export type AboutWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AccordionItem = Entity & {
  __typename?: 'AccordionItem';
  body?: Maybe<RichText>;
  heading?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

export type AccordionItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AccordionItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccordionItemConnection = {
  __typename?: 'AccordionItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AccordionItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AccordionItemCreateInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionItemCreateManyInlineInput = {
  /** Create and connect multiple existing AccordionItem documents */
  create?: InputMaybe<Array<AccordionItemCreateInput>>;
};

export type AccordionItemCreateOneInlineInput = {
  /** Create and connect one AccordionItem document */
  create?: InputMaybe<AccordionItemCreateInput>;
};

export type AccordionItemCreateWithPositionInput = {
  /** Document to create */
  data: AccordionItemCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type AccordionItemEdge = {
  __typename?: 'AccordionItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AccordionItem;
};

/** Identifies documents */
export type AccordionItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccordionItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccordionItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccordionItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum AccordionItemOrderByInput {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AccordionItemParent = Contact;

export type AccordionItemParentConnectInput = {
  Contact?: InputMaybe<ContactConnectInput>;
};

export type AccordionItemParentCreateInput = {
  Contact?: InputMaybe<ContactCreateInput>;
};

export type AccordionItemParentCreateManyInlineInput = {
  /** Connect multiple existing AccordionItemParent documents */
  connect?: InputMaybe<Array<AccordionItemParentWhereUniqueInput>>;
  /** Create and connect multiple existing AccordionItemParent documents */
  create?: InputMaybe<Array<AccordionItemParentCreateInput>>;
};

export type AccordionItemParentCreateOneInlineInput = {
  /** Connect one existing AccordionItemParent document */
  connect?: InputMaybe<AccordionItemParentWhereUniqueInput>;
  /** Create and connect one AccordionItemParent document */
  create?: InputMaybe<AccordionItemParentCreateInput>;
};

export type AccordionItemParentUpdateInput = {
  Contact?: InputMaybe<ContactUpdateInput>;
};

export type AccordionItemParentUpdateManyInlineInput = {
  /** Connect multiple existing AccordionItemParent documents */
  connect?: InputMaybe<Array<AccordionItemParentConnectInput>>;
  /** Create and connect multiple AccordionItemParent documents */
  create?: InputMaybe<Array<AccordionItemParentCreateInput>>;
  /** Delete multiple AccordionItemParent documents */
  delete?: InputMaybe<Array<AccordionItemParentWhereUniqueInput>>;
  /** Disconnect multiple AccordionItemParent documents */
  disconnect?: InputMaybe<Array<AccordionItemParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AccordionItemParent documents */
  set?: InputMaybe<Array<AccordionItemParentWhereUniqueInput>>;
  /** Update multiple AccordionItemParent documents */
  update?: InputMaybe<Array<AccordionItemParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AccordionItemParent documents */
  upsert?: InputMaybe<Array<AccordionItemParentUpsertWithNestedWhereUniqueInput>>;
};

export type AccordionItemParentUpdateManyWithNestedWhereInput = {
  Contact?: InputMaybe<ContactUpdateManyWithNestedWhereInput>;
};

export type AccordionItemParentUpdateOneInlineInput = {
  /** Connect existing AccordionItemParent document */
  connect?: InputMaybe<AccordionItemParentWhereUniqueInput>;
  /** Create and connect one AccordionItemParent document */
  create?: InputMaybe<AccordionItemParentCreateInput>;
  /** Delete currently connected AccordionItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected AccordionItemParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AccordionItemParent document */
  update?: InputMaybe<AccordionItemParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AccordionItemParent document */
  upsert?: InputMaybe<AccordionItemParentUpsertWithNestedWhereUniqueInput>;
};

export type AccordionItemParentUpdateWithNestedWhereUniqueInput = {
  Contact?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>;
};

export type AccordionItemParentUpsertWithNestedWhereUniqueInput = {
  Contact?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>;
};

export type AccordionItemParentWhereInput = {
  Contact?: InputMaybe<ContactWhereInput>;
};

export type AccordionItemParentWhereUniqueInput = {
  Contact?: InputMaybe<ContactWhereUniqueInput>;
};

export type AccordionItemUpdateInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionItemUpdateManyInlineInput = {
  /** Create and connect multiple AccordionItem component instances */
  create?: InputMaybe<Array<AccordionItemCreateWithPositionInput>>;
  /** Delete multiple AccordionItem documents */
  delete?: InputMaybe<Array<AccordionItemWhereUniqueInput>>;
  /** Update multiple AccordionItem component instances */
  update?: InputMaybe<Array<AccordionItemUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AccordionItem component instances */
  upsert?: InputMaybe<Array<AccordionItemUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AccordionItemUpdateManyInput = {
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AccordionItemUpdateManyInput;
  /** Document search */
  where: AccordionItemWhereInput;
};

export type AccordionItemUpdateOneInlineInput = {
  /** Create and connect one AccordionItem document */
  create?: InputMaybe<AccordionItemCreateInput>;
  /** Delete currently connected AccordionItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single AccordionItem document */
  update?: InputMaybe<AccordionItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AccordionItem document */
  upsert?: InputMaybe<AccordionItemUpsertWithNestedWhereUniqueInput>;
};

export type AccordionItemUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<AccordionItemUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AccordionItemWhereUniqueInput;
};

export type AccordionItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AccordionItemUpdateInput;
  /** Unique document search */
  where: AccordionItemWhereUniqueInput;
};

export type AccordionItemUpsertInput = {
  /** Create document if it didn't exist */
  create: AccordionItemCreateInput;
  /** Update document if it exists */
  update: AccordionItemUpdateInput;
};

export type AccordionItemUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<AccordionItemUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: AccordionItemWhereUniqueInput;
};

export type AccordionItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AccordionItemUpsertInput;
  /** Unique document search */
  where: AccordionItemWhereUniqueInput;
};

/** Identifies documents */
export type AccordionItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccordionItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccordionItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccordionItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References AccordionItem record uniquely */
export type AccordionItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

export type Appointment = Entity & Node & {
  __typename?: 'Appointment';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Appointment>;
  featuredImage?: Maybe<Media>;
  /** List of Appointment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo?: Maybe<PageMetaSeo>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AppointmentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AppointmentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type AppointmentFeaturedImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AppointmentHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type AppointmentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AppointmentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AppointmentSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AppointmentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AppointmentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AppointmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type AppointmentConnection = {
  __typename?: 'AppointmentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AppointmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AppointmentCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  featuredImage?: InputMaybe<MediaCreateOneInlineInput>;
  seo?: InputMaybe<PageMetaSeoCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AppointmentCreateManyInlineInput = {
  /** Connect multiple existing Appointment documents */
  connect?: InputMaybe<Array<AppointmentWhereUniqueInput>>;
  /** Create and connect multiple existing Appointment documents */
  create?: InputMaybe<Array<AppointmentCreateInput>>;
};

export type AppointmentCreateOneInlineInput = {
  /** Connect one existing Appointment document */
  connect?: InputMaybe<AppointmentWhereUniqueInput>;
  /** Create and connect one Appointment document */
  create?: InputMaybe<AppointmentCreateInput>;
};

/** An edge in a connection. */
export type AppointmentEdge = {
  __typename?: 'AppointmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Appointment;
};

/** Identifies documents */
export type AppointmentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AppointmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AppointmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AppointmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AppointmentWhereStageInput>;
  documentInStages_none?: InputMaybe<AppointmentWhereStageInput>;
  documentInStages_some?: InputMaybe<AppointmentWhereStageInput>;
  featuredImage?: InputMaybe<MediaWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AppointmentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AppointmentUpdateInput = {
  featuredImage?: InputMaybe<MediaUpdateOneInlineInput>;
  seo?: InputMaybe<PageMetaSeoUpdateOneInlineInput>;
};

export type AppointmentUpdateManyInlineInput = {
  /** Connect multiple existing Appointment documents */
  connect?: InputMaybe<Array<AppointmentConnectInput>>;
  /** Create and connect multiple Appointment documents */
  create?: InputMaybe<Array<AppointmentCreateInput>>;
  /** Delete multiple Appointment documents */
  delete?: InputMaybe<Array<AppointmentWhereUniqueInput>>;
  /** Disconnect multiple Appointment documents */
  disconnect?: InputMaybe<Array<AppointmentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Appointment documents */
  set?: InputMaybe<Array<AppointmentWhereUniqueInput>>;
  /** Update multiple Appointment documents */
  update?: InputMaybe<Array<AppointmentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Appointment documents */
  upsert?: InputMaybe<Array<AppointmentUpsertWithNestedWhereUniqueInput>>;
};

export type AppointmentUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AppointmentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AppointmentUpdateManyInput;
  /** Document search */
  where: AppointmentWhereInput;
};

export type AppointmentUpdateOneInlineInput = {
  /** Connect existing Appointment document */
  connect?: InputMaybe<AppointmentWhereUniqueInput>;
  /** Create and connect one Appointment document */
  create?: InputMaybe<AppointmentCreateInput>;
  /** Delete currently connected Appointment document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Appointment document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Appointment document */
  update?: InputMaybe<AppointmentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Appointment document */
  upsert?: InputMaybe<AppointmentUpsertWithNestedWhereUniqueInput>;
};

export type AppointmentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AppointmentUpdateInput;
  /** Unique document search */
  where: AppointmentWhereUniqueInput;
};

export type AppointmentUpsertInput = {
  /** Create document if it didn't exist */
  create: AppointmentCreateInput;
  /** Update document if it exists */
  update: AppointmentUpdateInput;
};

export type AppointmentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AppointmentUpsertInput;
  /** Unique document search */
  where: AppointmentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AppointmentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AppointmentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AppointmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AppointmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AppointmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AppointmentWhereStageInput>;
  documentInStages_none?: InputMaybe<AppointmentWhereStageInput>;
  documentInStages_some?: InputMaybe<AppointmentWhereStageInput>;
  featuredImage?: InputMaybe<MediaWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AppointmentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AppointmentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AppointmentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AppointmentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AppointmentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Appointment record uniquely */
export type AppointmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  altText?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  featuredImageLandingPage: Array<LandingPage>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  socialSharingImageLandingPage: Array<LandingPage>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetFeaturedImageLandingPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetSocialSharingImageLandingPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  featuredImageLandingPage?: InputMaybe<LandingPageCreateManyInlineInput>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  socialSharingImageLandingPage?: InputMaybe<LandingPageCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName: Scalars['String']['input'];
  handle: Scalars['String']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  altText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  featuredImageLandingPage_every?: InputMaybe<LandingPageWhereInput>;
  featuredImageLandingPage_none?: InputMaybe<LandingPageWhereInput>;
  featuredImageLandingPage_some?: InputMaybe<LandingPageWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  socialSharingImageLandingPage_every?: InputMaybe<LandingPageWhereInput>;
  socialSharingImageLandingPage_none?: InputMaybe<LandingPageWhereInput>;
  socialSharingImageLandingPage_some?: InputMaybe<LandingPageWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  featuredImageLandingPage?: InputMaybe<LandingPageUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  socialSharingImageLandingPage?: InputMaybe<LandingPageUpdateManyInlineInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  altText?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  featuredImageLandingPage_every?: InputMaybe<LandingPageWhereInput>;
  featuredImageLandingPage_none?: InputMaybe<LandingPageWhereInput>;
  featuredImageLandingPage_some?: InputMaybe<LandingPageWhereInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  socialSharingImageLandingPage_every?: InputMaybe<LandingPageWhereInput>;
  socialSharingImageLandingPage_none?: InputMaybe<LandingPageWhereInput>;
  socialSharingImageLandingPage_some?: InputMaybe<LandingPageWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Collection = Entity & {
  __typename?: 'Collection';
  heading?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Collection>;
  products: Array<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
};


export type CollectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};

export type CollectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CollectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionCreateInput = {
  /** heading input for default locale (en) */
  heading?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CollectionCreateLocalizationsInput>;
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CollectionCreateLocalizationDataInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionCreateLocalizationInput = {
  /** Localization input */
  data: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type CollectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
};

export type CollectionCreateManyInlineInput = {
  /** Create and connect multiple existing Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
};

export type CollectionCreateOneInlineInput = {
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
};

export type CollectionCreateWithPositionInput = {
  /** Document to create */
  data: CollectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  products_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  products_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  products_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  products_not?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum CollectionOrderByInput {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductsAsc = 'products_ASC',
  ProductsDesc = 'products_DESC'
}

export type CollectionParent = Section;

export type CollectionParentConnectInput = {
  Section?: InputMaybe<SectionConnectInput>;
};

export type CollectionParentCreateInput = {
  Section?: InputMaybe<SectionCreateInput>;
};

export type CollectionParentCreateManyInlineInput = {
  /** Connect multiple existing CollectionParent documents */
  connect?: InputMaybe<Array<CollectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing CollectionParent documents */
  create?: InputMaybe<Array<CollectionParentCreateInput>>;
};

export type CollectionParentCreateOneInlineInput = {
  /** Connect one existing CollectionParent document */
  connect?: InputMaybe<CollectionParentWhereUniqueInput>;
  /** Create and connect one CollectionParent document */
  create?: InputMaybe<CollectionParentCreateInput>;
};

export type CollectionParentUpdateInput = {
  Section?: InputMaybe<SectionUpdateInput>;
};

export type CollectionParentUpdateManyInlineInput = {
  /** Connect multiple existing CollectionParent documents */
  connect?: InputMaybe<Array<CollectionParentConnectInput>>;
  /** Create and connect multiple CollectionParent documents */
  create?: InputMaybe<Array<CollectionParentCreateInput>>;
  /** Delete multiple CollectionParent documents */
  delete?: InputMaybe<Array<CollectionParentWhereUniqueInput>>;
  /** Disconnect multiple CollectionParent documents */
  disconnect?: InputMaybe<Array<CollectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CollectionParent documents */
  set?: InputMaybe<Array<CollectionParentWhereUniqueInput>>;
  /** Update multiple CollectionParent documents */
  update?: InputMaybe<Array<CollectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CollectionParent documents */
  upsert?: InputMaybe<Array<CollectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionParentUpdateManyWithNestedWhereInput = {
  Section?: InputMaybe<SectionUpdateManyWithNestedWhereInput>;
};

export type CollectionParentUpdateOneInlineInput = {
  /** Connect existing CollectionParent document */
  connect?: InputMaybe<CollectionParentWhereUniqueInput>;
  /** Create and connect one CollectionParent document */
  create?: InputMaybe<CollectionParentCreateInput>;
  /** Delete currently connected CollectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CollectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CollectionParent document */
  update?: InputMaybe<CollectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CollectionParent document */
  upsert?: InputMaybe<CollectionParentUpsertWithNestedWhereUniqueInput>;
};

export type CollectionParentUpdateWithNestedWhereUniqueInput = {
  Section?: InputMaybe<SectionUpdateWithNestedWhereUniqueInput>;
};

export type CollectionParentUpsertWithNestedWhereUniqueInput = {
  Section?: InputMaybe<SectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionParentWhereInput = {
  Section?: InputMaybe<SectionWhereInput>;
};

export type CollectionParentWhereUniqueInput = {
  Section?: InputMaybe<SectionWhereUniqueInput>;
};

export type CollectionUpdateInput = {
  /** heading input for default locale (en) */
  heading?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<CollectionUpdateLocalizationsInput>;
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CollectionUpdateLocalizationDataInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionUpdateLocalizationInput = {
  data: CollectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CollectionUpsertLocalizationInput>>;
};

export type CollectionUpdateManyInlineInput = {
  /** Create and connect multiple Collection component instances */
  create?: InputMaybe<Array<CollectionCreateWithPositionInput>>;
  /** Delete multiple Collection documents */
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Update multiple Collection component instances */
  update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Collection component instances */
  upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CollectionUpdateManyInput = {
  /** heading input for default locale (en) */
  heading?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CollectionUpdateManyLocalizationsInput>;
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CollectionUpdateManyLocalizationDataInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionUpdateManyLocalizationInput = {
  data: CollectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateManyLocalizationInput>>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CollectionUpdateManyInput;
  /** Document search */
  where: CollectionWhereInput;
};

export type CollectionUpdateOneInlineInput = {
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
  /** Delete currently connected Collection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Collection document */
  update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Collection document */
  upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CollectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CollectionUpdateInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionCreateInput;
  /** Update document if it exists */
  update: CollectionUpdateInput;
};

export type CollectionUpsertLocalizationInput = {
  create: CollectionCreateLocalizationDataInput;
  locale: Locale;
  update: CollectionUpdateLocalizationDataInput;
};

export type CollectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CollectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CollectionUpsertInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

/** Identifies documents */
export type CollectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  products_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  products_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  products_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  products_not?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

/** General settings may be overwritten by more specific components settings in specific instances** */
export type ComponentGeneralConfig = Entity & {
  __typename?: 'ComponentGeneralConfig';
  backgroundColor?: Maybe<Color>;
  displayOnDesktop: Scalars['Boolean']['output'];
  displayOnMobile: Scalars['Boolean']['output'];
  /** Allows you to add a "gutter"; that is, padding between the Element and left/right edges of the window. If false, the element will be flush to the edge of the page. */
  hasGutter?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Optionally add a margin above the Component. Defaults to 'None' */
  margin?: Maybe<ElementMargin>;
  paddingBottom?: Maybe<ElementMargin>;
  paddingTop?: Maybe<ElementMargin>;
  /** System stage field */
  stage: Stage;
  textColor?: Maybe<Color>;
};

export type ComponentGeneralConfigConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ComponentGeneralConfigWhereUniqueInput;
};

/** A connection to a list of items. */
export type ComponentGeneralConfigConnection = {
  __typename?: 'ComponentGeneralConfigConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ComponentGeneralConfigEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ComponentGeneralConfigCreateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  displayOnDesktop: Scalars['Boolean']['input'];
  displayOnMobile: Scalars['Boolean']['input'];
  hasGutter?: InputMaybe<Scalars['Boolean']['input']>;
  margin?: InputMaybe<ElementMargin>;
  paddingBottom?: InputMaybe<ElementMargin>;
  paddingTop?: InputMaybe<ElementMargin>;
  textColor?: InputMaybe<ColorInput>;
};

export type ComponentGeneralConfigCreateManyInlineInput = {
  /** Create and connect multiple existing ComponentGeneralConfig documents */
  create?: InputMaybe<Array<ComponentGeneralConfigCreateInput>>;
};

export type ComponentGeneralConfigCreateOneInlineInput = {
  /** Create and connect one ComponentGeneralConfig document */
  create?: InputMaybe<ComponentGeneralConfigCreateInput>;
};

export type ComponentGeneralConfigCreateWithPositionInput = {
  /** Document to create */
  data: ComponentGeneralConfigCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ComponentGeneralConfigEdge = {
  __typename?: 'ComponentGeneralConfigEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ComponentGeneralConfig;
};

/** Identifies documents */
export type ComponentGeneralConfigManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ComponentGeneralConfigWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ComponentGeneralConfigWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ComponentGeneralConfigWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  displayOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  displayOnDesktop_not?: InputMaybe<Scalars['Boolean']['input']>;
  displayOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  displayOnMobile_not?: InputMaybe<Scalars['Boolean']['input']>;
  hasGutter?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasGutter_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  margin?: InputMaybe<ElementMargin>;
  /** All values that are contained in given list. */
  margin_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  /** Any other value that exists and is not equal to the given value. */
  margin_not?: InputMaybe<ElementMargin>;
  /** All values that are not contained in given list. */
  margin_not_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  paddingBottom?: InputMaybe<ElementMargin>;
  /** All values that are contained in given list. */
  paddingBottom_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  /** Any other value that exists and is not equal to the given value. */
  paddingBottom_not?: InputMaybe<ElementMargin>;
  /** All values that are not contained in given list. */
  paddingBottom_not_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  paddingTop?: InputMaybe<ElementMargin>;
  /** All values that are contained in given list. */
  paddingTop_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  /** Any other value that exists and is not equal to the given value. */
  paddingTop_not?: InputMaybe<ElementMargin>;
  /** All values that are not contained in given list. */
  paddingTop_not_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
};

export enum ComponentGeneralConfigOrderByInput {
  DisplayOnDesktopAsc = 'displayOnDesktop_ASC',
  DisplayOnDesktopDesc = 'displayOnDesktop_DESC',
  DisplayOnMobileAsc = 'displayOnMobile_ASC',
  DisplayOnMobileDesc = 'displayOnMobile_DESC',
  HasGutterAsc = 'hasGutter_ASC',
  HasGutterDesc = 'hasGutter_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MarginAsc = 'margin_ASC',
  MarginDesc = 'margin_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC'
}

export type ComponentGeneralConfigParent = ContentTile | CustomWidget | FeaturedCollection | Form;

export type ComponentGeneralConfigParentConnectInput = {
  ContentTile?: InputMaybe<ContentTileConnectInput>;
  CustomWidget?: InputMaybe<CustomWidgetConnectInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionConnectInput>;
  Form?: InputMaybe<FormConnectInput>;
};

export type ComponentGeneralConfigParentCreateInput = {
  ContentTile?: InputMaybe<ContentTileCreateInput>;
  CustomWidget?: InputMaybe<CustomWidgetCreateInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionCreateInput>;
  Form?: InputMaybe<FormCreateInput>;
};

export type ComponentGeneralConfigParentCreateManyInlineInput = {
  /** Create and connect multiple existing ComponentGeneralConfigParent documents */
  create?: InputMaybe<Array<ComponentGeneralConfigParentCreateInput>>;
};

export type ComponentGeneralConfigParentCreateOneInlineInput = {
  /** Create and connect one ComponentGeneralConfigParent document */
  create?: InputMaybe<ComponentGeneralConfigParentCreateInput>;
};

export type ComponentGeneralConfigParentCreateWithPositionInput = {
  ContentTile?: InputMaybe<ContentTileCreateWithPositionInput>;
  CustomWidget?: InputMaybe<CustomWidgetCreateWithPositionInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionCreateWithPositionInput>;
  Form?: InputMaybe<FormCreateWithPositionInput>;
};

export type ComponentGeneralConfigParentUpdateInput = {
  ContentTile?: InputMaybe<ContentTileUpdateInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateInput>;
  Form?: InputMaybe<FormUpdateInput>;
};

export type ComponentGeneralConfigParentUpdateManyInlineInput = {
  /** Create and connect multiple ComponentGeneralConfigParent component instances */
  create?: InputMaybe<Array<ComponentGeneralConfigParentCreateWithPositionInput>>;
  /** Delete multiple ComponentGeneralConfigParent documents */
  delete?: InputMaybe<Array<ComponentGeneralConfigParentWhereUniqueInput>>;
  /** Update multiple ComponentGeneralConfigParent component instances */
  update?: InputMaybe<Array<ComponentGeneralConfigParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ComponentGeneralConfigParent component instances */
  upsert?: InputMaybe<Array<ComponentGeneralConfigParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ComponentGeneralConfigParentUpdateManyWithNestedWhereInput = {
  ContentTile?: InputMaybe<ContentTileUpdateManyWithNestedWhereInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateManyWithNestedWhereInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateManyWithNestedWhereInput>;
  Form?: InputMaybe<FormUpdateManyWithNestedWhereInput>;
};

export type ComponentGeneralConfigParentUpdateOneInlineInput = {
  /** Create and connect one ComponentGeneralConfigParent document */
  create?: InputMaybe<ComponentGeneralConfigParentCreateInput>;
  /** Delete currently connected ComponentGeneralConfigParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ComponentGeneralConfigParent document */
  update?: InputMaybe<ComponentGeneralConfigParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ComponentGeneralConfigParent document */
  upsert?: InputMaybe<ComponentGeneralConfigParentUpsertWithNestedWhereUniqueInput>;
};

export type ComponentGeneralConfigParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ContentTile?: InputMaybe<ContentTileUpdateWithNestedWhereUniqueAndPositionInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateWithNestedWhereUniqueAndPositionInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateWithNestedWhereUniqueAndPositionInput>;
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type ComponentGeneralConfigParentUpdateWithNestedWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileUpdateWithNestedWhereUniqueInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateWithNestedWhereUniqueInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateWithNestedWhereUniqueInput>;
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueInput>;
};

export type ComponentGeneralConfigParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ContentTile?: InputMaybe<ContentTileUpsertWithNestedWhereUniqueAndPositionInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpsertWithNestedWhereUniqueAndPositionInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpsertWithNestedWhereUniqueAndPositionInput>;
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type ComponentGeneralConfigParentUpsertWithNestedWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileUpsertWithNestedWhereUniqueInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpsertWithNestedWhereUniqueInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpsertWithNestedWhereUniqueInput>;
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueInput>;
};

export type ComponentGeneralConfigParentWhereInput = {
  ContentTile?: InputMaybe<ContentTileWhereInput>;
  CustomWidget?: InputMaybe<CustomWidgetWhereInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionWhereInput>;
  Form?: InputMaybe<FormWhereInput>;
};

export type ComponentGeneralConfigParentWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileWhereUniqueInput>;
  CustomWidget?: InputMaybe<CustomWidgetWhereUniqueInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionWhereUniqueInput>;
  Form?: InputMaybe<FormWhereUniqueInput>;
};

export type ComponentGeneralConfigUpdateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  displayOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  displayOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  hasGutter?: InputMaybe<Scalars['Boolean']['input']>;
  margin?: InputMaybe<ElementMargin>;
  paddingBottom?: InputMaybe<ElementMargin>;
  paddingTop?: InputMaybe<ElementMargin>;
  textColor?: InputMaybe<ColorInput>;
};

export type ComponentGeneralConfigUpdateManyInlineInput = {
  /** Create and connect multiple ComponentGeneralConfig component instances */
  create?: InputMaybe<Array<ComponentGeneralConfigCreateWithPositionInput>>;
  /** Delete multiple ComponentGeneralConfig documents */
  delete?: InputMaybe<Array<ComponentGeneralConfigWhereUniqueInput>>;
  /** Update multiple ComponentGeneralConfig component instances */
  update?: InputMaybe<Array<ComponentGeneralConfigUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ComponentGeneralConfig component instances */
  upsert?: InputMaybe<Array<ComponentGeneralConfigUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ComponentGeneralConfigUpdateManyInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  displayOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  displayOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  hasGutter?: InputMaybe<Scalars['Boolean']['input']>;
  margin?: InputMaybe<ElementMargin>;
  paddingBottom?: InputMaybe<ElementMargin>;
  paddingTop?: InputMaybe<ElementMargin>;
  textColor?: InputMaybe<ColorInput>;
};

export type ComponentGeneralConfigUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ComponentGeneralConfigUpdateManyInput;
  /** Document search */
  where: ComponentGeneralConfigWhereInput;
};

export type ComponentGeneralConfigUpdateOneInlineInput = {
  /** Create and connect one ComponentGeneralConfig document */
  create?: InputMaybe<ComponentGeneralConfigCreateInput>;
  /** Delete currently connected ComponentGeneralConfig document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ComponentGeneralConfig document */
  update?: InputMaybe<ComponentGeneralConfigUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ComponentGeneralConfig document */
  upsert?: InputMaybe<ComponentGeneralConfigUpsertWithNestedWhereUniqueInput>;
};

export type ComponentGeneralConfigUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ComponentGeneralConfigUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ComponentGeneralConfigWhereUniqueInput;
};

export type ComponentGeneralConfigUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ComponentGeneralConfigUpdateInput;
  /** Unique document search */
  where: ComponentGeneralConfigWhereUniqueInput;
};

export type ComponentGeneralConfigUpsertInput = {
  /** Create document if it didn't exist */
  create: ComponentGeneralConfigCreateInput;
  /** Update document if it exists */
  update: ComponentGeneralConfigUpdateInput;
};

export type ComponentGeneralConfigUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ComponentGeneralConfigUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ComponentGeneralConfigWhereUniqueInput;
};

export type ComponentGeneralConfigUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ComponentGeneralConfigUpsertInput;
  /** Unique document search */
  where: ComponentGeneralConfigWhereUniqueInput;
};

/** Identifies documents */
export type ComponentGeneralConfigWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ComponentGeneralConfigWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ComponentGeneralConfigWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ComponentGeneralConfigWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  displayOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  displayOnDesktop_not?: InputMaybe<Scalars['Boolean']['input']>;
  displayOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  displayOnMobile_not?: InputMaybe<Scalars['Boolean']['input']>;
  hasGutter?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasGutter_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  margin?: InputMaybe<ElementMargin>;
  /** All values that are contained in given list. */
  margin_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  /** Any other value that exists and is not equal to the given value. */
  margin_not?: InputMaybe<ElementMargin>;
  /** All values that are not contained in given list. */
  margin_not_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  paddingBottom?: InputMaybe<ElementMargin>;
  /** All values that are contained in given list. */
  paddingBottom_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  /** Any other value that exists and is not equal to the given value. */
  paddingBottom_not?: InputMaybe<ElementMargin>;
  /** All values that are not contained in given list. */
  paddingBottom_not_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  paddingTop?: InputMaybe<ElementMargin>;
  /** All values that are contained in given list. */
  paddingTop_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
  /** Any other value that exists and is not equal to the given value. */
  paddingTop_not?: InputMaybe<ElementMargin>;
  /** All values that are not contained in given list. */
  paddingTop_not_in?: InputMaybe<Array<InputMaybe<ElementMargin>>>;
};

/** References ComponentGeneralConfig record uniquely */
export type ComponentGeneralConfigWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Configuration = Entity & Node & {
  __typename?: 'Configuration';
  closeWebsite?: Maybe<Scalars['Boolean']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Configuration>;
  /** List of Configuration versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** If the website is closed, it will open for everyone after the specified time. Otherwise, it will require a password until the "Close Site" toggle is switched off. */
  siteGoesLiveTime?: Maybe<Scalars['DateTime']['output']>;
  sitePassword?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ConfigurationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConfigurationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ConfigurationHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ConfigurationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ConfigurationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ConfigurationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ConfigurationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ConfigurationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ConfigurationConnection = {
  __typename?: 'ConfigurationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ConfigurationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ConfigurationCreateInput = {
  closeWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  siteGoesLiveTime?: InputMaybe<Scalars['DateTime']['input']>;
  sitePassword?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConfigurationCreateManyInlineInput = {
  /** Connect multiple existing Configuration documents */
  connect?: InputMaybe<Array<ConfigurationWhereUniqueInput>>;
  /** Create and connect multiple existing Configuration documents */
  create?: InputMaybe<Array<ConfigurationCreateInput>>;
};

export type ConfigurationCreateOneInlineInput = {
  /** Connect one existing Configuration document */
  connect?: InputMaybe<ConfigurationWhereUniqueInput>;
  /** Create and connect one Configuration document */
  create?: InputMaybe<ConfigurationCreateInput>;
};

/** An edge in a connection. */
export type ConfigurationEdge = {
  __typename?: 'ConfigurationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Configuration;
};

/** Identifies documents */
export type ConfigurationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConfigurationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConfigurationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConfigurationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  closeWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  closeWebsite_not?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ConfigurationWhereStageInput>;
  documentInStages_none?: InputMaybe<ConfigurationWhereStageInput>;
  documentInStages_some?: InputMaybe<ConfigurationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  siteGoesLiveTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  siteGoesLiveTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  siteGoesLiveTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  siteGoesLiveTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  siteGoesLiveTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  siteGoesLiveTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  siteGoesLiveTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  siteGoesLiveTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sitePassword?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sitePassword_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sitePassword_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sitePassword_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sitePassword_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sitePassword_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sitePassword_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sitePassword_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sitePassword_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sitePassword_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ConfigurationOrderByInput {
  CloseWebsiteAsc = 'closeWebsite_ASC',
  CloseWebsiteDesc = 'closeWebsite_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SiteGoesLiveTimeAsc = 'siteGoesLiveTime_ASC',
  SiteGoesLiveTimeDesc = 'siteGoesLiveTime_DESC',
  SitePasswordAsc = 'sitePassword_ASC',
  SitePasswordDesc = 'sitePassword_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ConfigurationUpdateInput = {
  closeWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  siteGoesLiveTime?: InputMaybe<Scalars['DateTime']['input']>;
  sitePassword?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigurationUpdateManyInlineInput = {
  /** Connect multiple existing Configuration documents */
  connect?: InputMaybe<Array<ConfigurationConnectInput>>;
  /** Create and connect multiple Configuration documents */
  create?: InputMaybe<Array<ConfigurationCreateInput>>;
  /** Delete multiple Configuration documents */
  delete?: InputMaybe<Array<ConfigurationWhereUniqueInput>>;
  /** Disconnect multiple Configuration documents */
  disconnect?: InputMaybe<Array<ConfigurationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Configuration documents */
  set?: InputMaybe<Array<ConfigurationWhereUniqueInput>>;
  /** Update multiple Configuration documents */
  update?: InputMaybe<Array<ConfigurationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Configuration documents */
  upsert?: InputMaybe<Array<ConfigurationUpsertWithNestedWhereUniqueInput>>;
};

export type ConfigurationUpdateManyInput = {
  closeWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  siteGoesLiveTime?: InputMaybe<Scalars['DateTime']['input']>;
  sitePassword?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigurationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ConfigurationUpdateManyInput;
  /** Document search */
  where: ConfigurationWhereInput;
};

export type ConfigurationUpdateOneInlineInput = {
  /** Connect existing Configuration document */
  connect?: InputMaybe<ConfigurationWhereUniqueInput>;
  /** Create and connect one Configuration document */
  create?: InputMaybe<ConfigurationCreateInput>;
  /** Delete currently connected Configuration document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Configuration document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Configuration document */
  update?: InputMaybe<ConfigurationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Configuration document */
  upsert?: InputMaybe<ConfigurationUpsertWithNestedWhereUniqueInput>;
};

export type ConfigurationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ConfigurationUpdateInput;
  /** Unique document search */
  where: ConfigurationWhereUniqueInput;
};

export type ConfigurationUpsertInput = {
  /** Create document if it didn't exist */
  create: ConfigurationCreateInput;
  /** Update document if it exists */
  update: ConfigurationUpdateInput;
};

export type ConfigurationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ConfigurationUpsertInput;
  /** Unique document search */
  where: ConfigurationWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ConfigurationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ConfigurationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConfigurationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConfigurationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConfigurationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  closeWebsite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  closeWebsite_not?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ConfigurationWhereStageInput>;
  documentInStages_none?: InputMaybe<ConfigurationWhereStageInput>;
  documentInStages_some?: InputMaybe<ConfigurationWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  siteGoesLiveTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  siteGoesLiveTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  siteGoesLiveTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  siteGoesLiveTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  siteGoesLiveTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  siteGoesLiveTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  siteGoesLiveTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  siteGoesLiveTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sitePassword?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sitePassword_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sitePassword_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sitePassword_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sitePassword_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sitePassword_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sitePassword_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sitePassword_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sitePassword_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sitePassword_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ConfigurationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ConfigurationWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ConfigurationWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ConfigurationWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ConfigurationWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Configuration record uniquely */
export type ConfigurationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Contact = Entity & Node & {
  __typename?: 'Contact';
  /** Extra accordion items, which populate below orders/shipping/returns */
  accordion: Array<AccordionItem>;
  contactBody?: Maybe<RichText>;
  contactHeading?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Contact>;
  faqHeading?: Maybe<Scalars['String']['output']>;
  featuredImage?: Maybe<Media>;
  /** List of Contact versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo?: Maybe<PageMetaSeo>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ContactAccordionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AccordionItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionItemWhereInput>;
};


export type ContactCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ContactFeaturedImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ContactPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ContactSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContactUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContactConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactConnection = {
  __typename?: 'ContactConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactCreateInput = {
  accordion?: InputMaybe<AccordionItemCreateManyInlineInput>;
  contactBody?: InputMaybe<Scalars['RichTextAST']['input']>;
  contactHeading?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  faqHeading?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<MediaCreateOneInlineInput>;
  seo?: InputMaybe<PageMetaSeoCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContactCreateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  /** Create and connect multiple existing Contact documents */
  create?: InputMaybe<Array<ContactCreateInput>>;
};

export type ContactCreateOneInlineInput = {
  /** Connect one existing Contact document */
  connect?: InputMaybe<ContactWhereUniqueInput>;
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>;
};

/** An edge in a connection. */
export type ContactEdge = {
  __typename?: 'ContactEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Contact;
};

/** Identifies documents */
export type ContactManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  accordion_every?: InputMaybe<AccordionItemWhereInput>;
  accordion_none?: InputMaybe<AccordionItemWhereInput>;
  accordion_some?: InputMaybe<AccordionItemWhereInput>;
  contactHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContactWhereStageInput>;
  documentInStages_none?: InputMaybe<ContactWhereStageInput>;
  documentInStages_some?: InputMaybe<ContactWhereStageInput>;
  faqHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  faqHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  faqHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  faqHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  faqHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  faqHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  faqHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  faqHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  faqHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  faqHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<MediaWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ContactOrderByInput {
  ContactHeadingAsc = 'contactHeading_ASC',
  ContactHeadingDesc = 'contactHeading_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FaqHeadingAsc = 'faqHeading_ASC',
  FaqHeadingDesc = 'faqHeading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ContactUpdateInput = {
  accordion?: InputMaybe<AccordionItemUpdateManyInlineInput>;
  contactBody?: InputMaybe<Scalars['RichTextAST']['input']>;
  contactHeading?: InputMaybe<Scalars['String']['input']>;
  faqHeading?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<MediaUpdateOneInlineInput>;
  seo?: InputMaybe<PageMetaSeoUpdateOneInlineInput>;
};

export type ContactUpdateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: InputMaybe<Array<ContactConnectInput>>;
  /** Create and connect multiple Contact documents */
  create?: InputMaybe<Array<ContactCreateInput>>;
  /** Delete multiple Contact documents */
  delete?: InputMaybe<Array<ContactWhereUniqueInput>>;
  /** Disconnect multiple Contact documents */
  disconnect?: InputMaybe<Array<ContactWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Contact documents */
  set?: InputMaybe<Array<ContactWhereUniqueInput>>;
  /** Update multiple Contact documents */
  update?: InputMaybe<Array<ContactUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Contact documents */
  upsert?: InputMaybe<Array<ContactUpsertWithNestedWhereUniqueInput>>;
};

export type ContactUpdateManyInput = {
  contactBody?: InputMaybe<Scalars['RichTextAST']['input']>;
  contactHeading?: InputMaybe<Scalars['String']['input']>;
  faqHeading?: InputMaybe<Scalars['String']['input']>;
};

export type ContactUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactUpdateManyInput;
  /** Document search */
  where: ContactWhereInput;
};

export type ContactUpdateOneInlineInput = {
  /** Connect existing Contact document */
  connect?: InputMaybe<ContactWhereUniqueInput>;
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>;
  /** Delete currently connected Contact document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Contact document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Contact document */
  update?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Contact document */
  upsert?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>;
};

export type ContactUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactUpdateInput;
  /** Unique document search */
  where: ContactWhereUniqueInput;
};

export type ContactUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactCreateInput;
  /** Update document if it exists */
  update: ContactUpdateInput;
};

export type ContactUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactUpsertInput;
  /** Unique document search */
  where: ContactWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ContactWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ContactWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  accordion_every?: InputMaybe<AccordionItemWhereInput>;
  accordion_none?: InputMaybe<AccordionItemWhereInput>;
  accordion_some?: InputMaybe<AccordionItemWhereInput>;
  contactHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContactWhereStageInput>;
  documentInStages_none?: InputMaybe<ContactWhereStageInput>;
  documentInStages_some?: InputMaybe<ContactWhereStageInput>;
  faqHeading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  faqHeading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  faqHeading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  faqHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  faqHeading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  faqHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  faqHeading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  faqHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  faqHeading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  faqHeading_starts_with?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<MediaWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ContactWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ContactWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Contact record uniquely */
export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ContainerWidth {
  Fluid = 'fluid',
  Wide = 'wide'
}

export type Content = Entity & Node & {
  __typename?: 'Content';
  backgroundColor?: Maybe<Color>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Content>;
  /** List of Content versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  pages: Array<LandingPage>;
  primaryColor?: Maybe<Color>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  sections: Array<Section>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ContentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type ContentHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type ContentPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type ContentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ContentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ContentSectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type ContentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContentWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContentConnection = {
  __typename?: 'ContentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContentCreateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<LandingPageCreateManyInlineInput>;
  primaryColor?: InputMaybe<ColorInput>;
  sections?: InputMaybe<SectionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContentCreateManyInlineInput = {
  /** Connect multiple existing Content documents */
  connect?: InputMaybe<Array<ContentWhereUniqueInput>>;
  /** Create and connect multiple existing Content documents */
  create?: InputMaybe<Array<ContentCreateInput>>;
};

export type ContentCreateOneInlineInput = {
  /** Connect one existing Content document */
  connect?: InputMaybe<ContentWhereUniqueInput>;
  /** Create and connect one Content document */
  create?: InputMaybe<ContentCreateInput>;
};

/** An edge in a connection. */
export type ContentEdge = {
  __typename?: 'ContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Content;
};

/** Identifies documents */
export type ContentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContentWhereStageInput>;
  documentInStages_none?: InputMaybe<ContentWhereStageInput>;
  documentInStages_some?: InputMaybe<ContentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  internalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  internalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  internalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  internalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  pages_every?: InputMaybe<LandingPageWhereInput>;
  pages_none?: InputMaybe<LandingPageWhereInput>;
  pages_some?: InputMaybe<LandingPageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sections_every?: InputMaybe<SectionWhereInput>;
  sections_none?: InputMaybe<SectionWhereInput>;
  sections_some?: InputMaybe<SectionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ContentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Formally known as "Generic Grid Content" in the old Shopify Theme. Repeatable blocks along a single row that may be used as a CTA or to highlight important information */
export type ContentTile = Entity & {
  __typename?: 'ContentTile';
  /** Defines the Aspect Ratio for your content tiles. Default is 1x1 */
  aspectRatio?: Maybe<ContentTileAspectRatio>;
  /** Template variable; cannot be modified — App uses this variable to link the component to a template file */
  componentType?: Maybe<Scalars['String']['output']>;
  generalConfig?: Maybe<ComponentGeneralConfig>;
  /** Include padding between the tiles */
  hasGutterBetweenTiles?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Change the aspect ratio for the content tiles on mobile display. Defaults to match the desktop aspect ratio if no value is specified */
  mobileAspectRatio?: Maybe<ContentTileAspectRatio>;
  /** System stage field */
  stage: Stage;
  tiles: Array<Tile>;
};


/** Formally known as "Generic Grid Content" in the old Shopify Theme. Repeatable blocks along a single row that may be used as a CTA or to highlight important information */
export type ContentTileGeneralConfigArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Formally known as "Generic Grid Content" in the old Shopify Theme. Repeatable blocks along a single row that may be used as a CTA or to highlight important information */
export type ContentTileTilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TileWhereInput>;
};

/** Defines the aspect Ratio for Content Tiles */
export enum ContentTileAspectRatio {
  Aspect_1x1 = 'aspect_1x1',
  Aspect_2x1 = 'aspect_2x1',
  Aspect_3x2 = 'aspect_3x2',
  Aspect_4x5 = 'aspect_4x5',
  Aspect_4x6 = 'aspect_4x6',
  Aspect_5x1 = 'aspect_5x1',
  Aspect_5x4 = 'aspect_5x4',
  Aspect_5x7 = 'aspect_5x7',
  Aspect_9x16 = 'aspect_9x16',
  Aspect_16x9 = 'aspect_16x9',
  AspectFullscreen = 'aspect_fullscreen'
}

export type ContentTileConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContentTileWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContentTileConnection = {
  __typename?: 'ContentTileConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContentTileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContentTileCreateInput = {
  aspectRatio?: InputMaybe<ContentTileAspectRatio>;
  componentType?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigCreateOneInlineInput>;
  hasGutterBetweenTiles?: InputMaybe<Scalars['Boolean']['input']>;
  mobileAspectRatio?: InputMaybe<ContentTileAspectRatio>;
  tiles?: InputMaybe<TileCreateManyInlineInput>;
};

export type ContentTileCreateManyInlineInput = {
  /** Create and connect multiple existing ContentTile documents */
  create?: InputMaybe<Array<ContentTileCreateInput>>;
};

export type ContentTileCreateOneInlineInput = {
  /** Create and connect one ContentTile document */
  create?: InputMaybe<ContentTileCreateInput>;
};

export type ContentTileCreateWithPositionInput = {
  /** Document to create */
  data: ContentTileCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContentTileEdge = {
  __typename?: 'ContentTileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ContentTile;
};

/** Identifies documents */
export type ContentTileManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentTileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentTileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentTileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  aspectRatio?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are contained in given list. */
  aspectRatio_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  /** Any other value that exists and is not equal to the given value. */
  aspectRatio_not?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are not contained in given list. */
  aspectRatio_not_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  componentType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentType_starts_with?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  hasGutterBetweenTiles?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasGutterBetweenTiles_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mobileAspectRatio?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are contained in given list. */
  mobileAspectRatio_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  /** Any other value that exists and is not equal to the given value. */
  mobileAspectRatio_not?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are not contained in given list. */
  mobileAspectRatio_not_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  tiles_every?: InputMaybe<TileWhereInput>;
  tiles_none?: InputMaybe<TileWhereInput>;
  tiles_some?: InputMaybe<TileWhereInput>;
};

export enum ContentTileOrderByInput {
  AspectRatioAsc = 'aspectRatio_ASC',
  AspectRatioDesc = 'aspectRatio_DESC',
  ComponentTypeAsc = 'componentType_ASC',
  ComponentTypeDesc = 'componentType_DESC',
  HasGutterBetweenTilesAsc = 'hasGutterBetweenTiles_ASC',
  HasGutterBetweenTilesDesc = 'hasGutterBetweenTiles_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MobileAspectRatioAsc = 'mobileAspectRatio_ASC',
  MobileAspectRatioDesc = 'mobileAspectRatio_DESC'
}

export type ContentTileParent = Page;

export type ContentTileParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type ContentTileParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type ContentTileParentCreateManyInlineInput = {
  /** Connect multiple existing ContentTileParent documents */
  connect?: InputMaybe<Array<ContentTileParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContentTileParent documents */
  create?: InputMaybe<Array<ContentTileParentCreateInput>>;
};

export type ContentTileParentCreateOneInlineInput = {
  /** Connect one existing ContentTileParent document */
  connect?: InputMaybe<ContentTileParentWhereUniqueInput>;
  /** Create and connect one ContentTileParent document */
  create?: InputMaybe<ContentTileParentCreateInput>;
};

export type ContentTileParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type ContentTileParentUpdateManyInlineInput = {
  /** Connect multiple existing ContentTileParent documents */
  connect?: InputMaybe<Array<ContentTileParentConnectInput>>;
  /** Create and connect multiple ContentTileParent documents */
  create?: InputMaybe<Array<ContentTileParentCreateInput>>;
  /** Delete multiple ContentTileParent documents */
  delete?: InputMaybe<Array<ContentTileParentWhereUniqueInput>>;
  /** Disconnect multiple ContentTileParent documents */
  disconnect?: InputMaybe<Array<ContentTileParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContentTileParent documents */
  set?: InputMaybe<Array<ContentTileParentWhereUniqueInput>>;
  /** Update multiple ContentTileParent documents */
  update?: InputMaybe<Array<ContentTileParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContentTileParent documents */
  upsert?: InputMaybe<Array<ContentTileParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContentTileParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type ContentTileParentUpdateOneInlineInput = {
  /** Connect existing ContentTileParent document */
  connect?: InputMaybe<ContentTileParentWhereUniqueInput>;
  /** Create and connect one ContentTileParent document */
  create?: InputMaybe<ContentTileParentCreateInput>;
  /** Delete currently connected ContentTileParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ContentTileParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContentTileParent document */
  update?: InputMaybe<ContentTileParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentTileParent document */
  upsert?: InputMaybe<ContentTileParentUpsertWithNestedWhereUniqueInput>;
};

export type ContentTileParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type ContentTileParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type ContentTileParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type ContentTileParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

/** Specifies where the text in a content tile will be rendered. Format is {vertical position}_{horizontal position} */
export enum ContentTileTextPosition {
  BottomCenter = 'bottom_center',
  BottomLeft = 'bottom_left',
  BottomRight = 'bottom_right',
  MiddleCenter = 'middle_center',
  MiddleLeft = 'middle_left',
  MiddleRight = 'middle_right',
  TopCenter = 'top_center',
  TopLeft = 'top_left',
  TopRight = 'top_right'
}

export type ContentTileUpdateInput = {
  aspectRatio?: InputMaybe<ContentTileAspectRatio>;
  componentType?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigUpdateOneInlineInput>;
  hasGutterBetweenTiles?: InputMaybe<Scalars['Boolean']['input']>;
  mobileAspectRatio?: InputMaybe<ContentTileAspectRatio>;
  tiles?: InputMaybe<TileUpdateManyInlineInput>;
};

export type ContentTileUpdateManyInlineInput = {
  /** Create and connect multiple ContentTile component instances */
  create?: InputMaybe<Array<ContentTileCreateWithPositionInput>>;
  /** Delete multiple ContentTile documents */
  delete?: InputMaybe<Array<ContentTileWhereUniqueInput>>;
  /** Update multiple ContentTile component instances */
  update?: InputMaybe<Array<ContentTileUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContentTile component instances */
  upsert?: InputMaybe<Array<ContentTileUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContentTileUpdateManyInput = {
  aspectRatio?: InputMaybe<ContentTileAspectRatio>;
  componentType?: InputMaybe<Scalars['String']['input']>;
  hasGutterBetweenTiles?: InputMaybe<Scalars['Boolean']['input']>;
  mobileAspectRatio?: InputMaybe<ContentTileAspectRatio>;
};

export type ContentTileUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContentTileUpdateManyInput;
  /** Document search */
  where: ContentTileWhereInput;
};

export type ContentTileUpdateOneInlineInput = {
  /** Create and connect one ContentTile document */
  create?: InputMaybe<ContentTileCreateInput>;
  /** Delete currently connected ContentTile document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ContentTile document */
  update?: InputMaybe<ContentTileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContentTile document */
  upsert?: InputMaybe<ContentTileUpsertWithNestedWhereUniqueInput>;
};

export type ContentTileUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContentTileUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentTileWhereUniqueInput;
};

export type ContentTileUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContentTileUpdateInput;
  /** Unique document search */
  where: ContentTileWhereUniqueInput;
};

export type ContentTileUpsertInput = {
  /** Create document if it didn't exist */
  create: ContentTileCreateInput;
  /** Update document if it exists */
  update: ContentTileUpdateInput;
};

export type ContentTileUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContentTileUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContentTileWhereUniqueInput;
};

export type ContentTileUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContentTileUpsertInput;
  /** Unique document search */
  where: ContentTileWhereUniqueInput;
};

/** Identifies documents */
export type ContentTileWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentTileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentTileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentTileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  aspectRatio?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are contained in given list. */
  aspectRatio_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  /** Any other value that exists and is not equal to the given value. */
  aspectRatio_not?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are not contained in given list. */
  aspectRatio_not_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  componentType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  componentType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  componentType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  componentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  componentType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  componentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  componentType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  componentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  componentType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  componentType_starts_with?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  hasGutterBetweenTiles?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasGutterBetweenTiles_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  mobileAspectRatio?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are contained in given list. */
  mobileAspectRatio_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  /** Any other value that exists and is not equal to the given value. */
  mobileAspectRatio_not?: InputMaybe<ContentTileAspectRatio>;
  /** All values that are not contained in given list. */
  mobileAspectRatio_not_in?: InputMaybe<Array<InputMaybe<ContentTileAspectRatio>>>;
  tiles_every?: InputMaybe<TileWhereInput>;
  tiles_none?: InputMaybe<TileWhereInput>;
  tiles_some?: InputMaybe<TileWhereInput>;
};

/** References ContentTile record uniquely */
export type ContentTileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ContentUpdateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<LandingPageUpdateManyInlineInput>;
  primaryColor?: InputMaybe<ColorInput>;
  sections?: InputMaybe<SectionUpdateManyInlineInput>;
};

export type ContentUpdateManyInlineInput = {
  /** Connect multiple existing Content documents */
  connect?: InputMaybe<Array<ContentConnectInput>>;
  /** Create and connect multiple Content documents */
  create?: InputMaybe<Array<ContentCreateInput>>;
  /** Delete multiple Content documents */
  delete?: InputMaybe<Array<ContentWhereUniqueInput>>;
  /** Disconnect multiple Content documents */
  disconnect?: InputMaybe<Array<ContentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Content documents */
  set?: InputMaybe<Array<ContentWhereUniqueInput>>;
  /** Update multiple Content documents */
  update?: InputMaybe<Array<ContentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Content documents */
  upsert?: InputMaybe<Array<ContentUpsertWithNestedWhereUniqueInput>>;
};

export type ContentUpdateManyInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  primaryColor?: InputMaybe<ColorInput>;
};

export type ContentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContentUpdateManyInput;
  /** Document search */
  where: ContentWhereInput;
};

export type ContentUpdateOneInlineInput = {
  /** Connect existing Content document */
  connect?: InputMaybe<ContentWhereUniqueInput>;
  /** Create and connect one Content document */
  create?: InputMaybe<ContentCreateInput>;
  /** Delete currently connected Content document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Content document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Content document */
  update?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Content document */
  upsert?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type ContentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContentUpdateInput;
  /** Unique document search */
  where: ContentWhereUniqueInput;
};

export type ContentUpsertInput = {
  /** Create document if it didn't exist */
  create: ContentCreateInput;
  /** Update document if it exists */
  update: ContentUpdateInput;
};

export type ContentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContentUpsertInput;
  /** Unique document search */
  where: ContentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ContentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ContentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ContentWhereStageInput>;
  documentInStages_none?: InputMaybe<ContentWhereStageInput>;
  documentInStages_some?: InputMaybe<ContentWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  internalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  internalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  internalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  internalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  pages_every?: InputMaybe<LandingPageWhereInput>;
  pages_none?: InputMaybe<LandingPageWhereInput>;
  pages_some?: InputMaybe<LandingPageWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sections_every?: InputMaybe<SectionWhereInput>;
  sections_none?: InputMaybe<SectionWhereInput>;
  sections_some?: InputMaybe<SectionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ContentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ContentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Content record uniquely */
export type ContentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum CustomSections {
  ComingSoon = 'coming_soon'
}

export type CustomWidget = Entity & {
  __typename?: 'CustomWidget';
  availableNowHeading?: Maybe<RichText>;
  body?: Maybe<RichText>;
  comingSoonHeading?: Maybe<RichText>;
  editorial?: Maybe<Scalars['String']['output']>;
  gallery: Array<Scalars['Json']['output']>;
  generalConfig?: Maybe<ComponentGeneralConfig>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  launchDate?: Maybe<Scalars['DateTime']['output']>;
  /** Switch the position of the image slider and text content. If true, text will display in the first column and image will display in the second column */
  mirror?: Maybe<Scalars['Boolean']['output']>;
  productData: Array<FeaturedProductData>;
  /** System stage field */
  stage: Stage;
};


export type CustomWidgetGeneralConfigArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type CustomWidgetProductDataArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FeaturedProductDataOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeaturedProductDataWhereInput>;
};

export type CustomWidgetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CustomWidgetWhereUniqueInput;
};

/** A connection to a list of items. */
export type CustomWidgetConnection = {
  __typename?: 'CustomWidgetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CustomWidgetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CustomWidgetCreateInput = {
  availableNowHeading?: InputMaybe<Scalars['RichTextAST']['input']>;
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  comingSoonHeading?: InputMaybe<Scalars['RichTextAST']['input']>;
  editorial?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  generalConfig?: InputMaybe<ComponentGeneralConfigCreateOneInlineInput>;
  launchDate?: InputMaybe<Scalars['DateTime']['input']>;
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  productData?: InputMaybe<FeaturedProductDataCreateManyInlineInput>;
};

export type CustomWidgetCreateManyInlineInput = {
  /** Create and connect multiple existing CustomWidget documents */
  create?: InputMaybe<Array<CustomWidgetCreateInput>>;
};

export type CustomWidgetCreateOneInlineInput = {
  /** Create and connect one CustomWidget document */
  create?: InputMaybe<CustomWidgetCreateInput>;
};

export type CustomWidgetCreateWithPositionInput = {
  /** Document to create */
  data: CustomWidgetCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CustomWidgetEdge = {
  __typename?: 'CustomWidgetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CustomWidget;
};

/** Identifies documents */
export type CustomWidgetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CustomWidgetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CustomWidgetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CustomWidgetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  editorial?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  editorial_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  editorial_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  editorial_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  editorial_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  editorial_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  editorial_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  editorial_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  editorial_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  editorial_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  gallery_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  gallery_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  launchDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  launchDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  launchDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  launchDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  launchDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  launchDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  launchDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  launchDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  mirror_not?: InputMaybe<Scalars['Boolean']['input']>;
  productData_every?: InputMaybe<FeaturedProductDataWhereInput>;
  productData_none?: InputMaybe<FeaturedProductDataWhereInput>;
  productData_some?: InputMaybe<FeaturedProductDataWhereInput>;
};

export enum CustomWidgetOrderByInput {
  EditorialAsc = 'editorial_ASC',
  EditorialDesc = 'editorial_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LaunchDateAsc = 'launchDate_ASC',
  LaunchDateDesc = 'launchDate_DESC',
  MirrorAsc = 'mirror_ASC',
  MirrorDesc = 'mirror_DESC'
}

export type CustomWidgetParent = Page;

export type CustomWidgetParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type CustomWidgetParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type CustomWidgetParentCreateManyInlineInput = {
  /** Connect multiple existing CustomWidgetParent documents */
  connect?: InputMaybe<Array<CustomWidgetParentWhereUniqueInput>>;
  /** Create and connect multiple existing CustomWidgetParent documents */
  create?: InputMaybe<Array<CustomWidgetParentCreateInput>>;
};

export type CustomWidgetParentCreateOneInlineInput = {
  /** Connect one existing CustomWidgetParent document */
  connect?: InputMaybe<CustomWidgetParentWhereUniqueInput>;
  /** Create and connect one CustomWidgetParent document */
  create?: InputMaybe<CustomWidgetParentCreateInput>;
};

export type CustomWidgetParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type CustomWidgetParentUpdateManyInlineInput = {
  /** Connect multiple existing CustomWidgetParent documents */
  connect?: InputMaybe<Array<CustomWidgetParentConnectInput>>;
  /** Create and connect multiple CustomWidgetParent documents */
  create?: InputMaybe<Array<CustomWidgetParentCreateInput>>;
  /** Delete multiple CustomWidgetParent documents */
  delete?: InputMaybe<Array<CustomWidgetParentWhereUniqueInput>>;
  /** Disconnect multiple CustomWidgetParent documents */
  disconnect?: InputMaybe<Array<CustomWidgetParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CustomWidgetParent documents */
  set?: InputMaybe<Array<CustomWidgetParentWhereUniqueInput>>;
  /** Update multiple CustomWidgetParent documents */
  update?: InputMaybe<Array<CustomWidgetParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CustomWidgetParent documents */
  upsert?: InputMaybe<Array<CustomWidgetParentUpsertWithNestedWhereUniqueInput>>;
};

export type CustomWidgetParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type CustomWidgetParentUpdateOneInlineInput = {
  /** Connect existing CustomWidgetParent document */
  connect?: InputMaybe<CustomWidgetParentWhereUniqueInput>;
  /** Create and connect one CustomWidgetParent document */
  create?: InputMaybe<CustomWidgetParentCreateInput>;
  /** Delete currently connected CustomWidgetParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected CustomWidgetParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CustomWidgetParent document */
  update?: InputMaybe<CustomWidgetParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CustomWidgetParent document */
  upsert?: InputMaybe<CustomWidgetParentUpsertWithNestedWhereUniqueInput>;
};

export type CustomWidgetParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type CustomWidgetParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type CustomWidgetParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type CustomWidgetParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type CustomWidgetUpdateInput = {
  availableNowHeading?: InputMaybe<Scalars['RichTextAST']['input']>;
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  comingSoonHeading?: InputMaybe<Scalars['RichTextAST']['input']>;
  editorial?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  generalConfig?: InputMaybe<ComponentGeneralConfigUpdateOneInlineInput>;
  launchDate?: InputMaybe<Scalars['DateTime']['input']>;
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  productData?: InputMaybe<FeaturedProductDataUpdateManyInlineInput>;
};

export type CustomWidgetUpdateManyInlineInput = {
  /** Create and connect multiple CustomWidget component instances */
  create?: InputMaybe<Array<CustomWidgetCreateWithPositionInput>>;
  /** Delete multiple CustomWidget documents */
  delete?: InputMaybe<Array<CustomWidgetWhereUniqueInput>>;
  /** Update multiple CustomWidget component instances */
  update?: InputMaybe<Array<CustomWidgetUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CustomWidget component instances */
  upsert?: InputMaybe<Array<CustomWidgetUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CustomWidgetUpdateManyInput = {
  availableNowHeading?: InputMaybe<Scalars['RichTextAST']['input']>;
  body?: InputMaybe<Scalars['RichTextAST']['input']>;
  comingSoonHeading?: InputMaybe<Scalars['RichTextAST']['input']>;
  editorial?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  launchDate?: InputMaybe<Scalars['DateTime']['input']>;
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomWidgetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CustomWidgetUpdateManyInput;
  /** Document search */
  where: CustomWidgetWhereInput;
};

export type CustomWidgetUpdateOneInlineInput = {
  /** Create and connect one CustomWidget document */
  create?: InputMaybe<CustomWidgetCreateInput>;
  /** Delete currently connected CustomWidget document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CustomWidget document */
  update?: InputMaybe<CustomWidgetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CustomWidget document */
  upsert?: InputMaybe<CustomWidgetUpsertWithNestedWhereUniqueInput>;
};

export type CustomWidgetUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CustomWidgetUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CustomWidgetWhereUniqueInput;
};

export type CustomWidgetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CustomWidgetUpdateInput;
  /** Unique document search */
  where: CustomWidgetWhereUniqueInput;
};

export type CustomWidgetUpsertInput = {
  /** Create document if it didn't exist */
  create: CustomWidgetCreateInput;
  /** Update document if it exists */
  update: CustomWidgetUpdateInput;
};

export type CustomWidgetUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CustomWidgetUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CustomWidgetWhereUniqueInput;
};

export type CustomWidgetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CustomWidgetUpsertInput;
  /** Unique document search */
  where: CustomWidgetWhereUniqueInput;
};

/** Identifies documents */
export type CustomWidgetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CustomWidgetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CustomWidgetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CustomWidgetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  editorial?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  editorial_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  editorial_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  editorial_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  editorial_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  editorial_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  editorial_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  editorial_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  editorial_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  editorial_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  gallery_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  gallery_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  launchDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  launchDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  launchDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  launchDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  launchDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  launchDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  launchDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  launchDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  mirror?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  mirror_not?: InputMaybe<Scalars['Boolean']['input']>;
  productData_every?: InputMaybe<FeaturedProductDataWhereInput>;
  productData_none?: InputMaybe<FeaturedProductDataWhereInput>;
  productData_some?: InputMaybe<FeaturedProductDataWhereInput>;
};

/** References CustomWidget record uniquely */
export type CustomWidgetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type Editorial = Entity & Node & {
  __typename?: 'Editorial';
  artistStatement?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Editorial>;
  gallery: Array<Scalars['Json']['output']>;
  /** List of Editorial versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo?: Maybe<PageMetaSeo>;
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EditorialCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EditorialDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type EditorialHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type EditorialPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EditorialScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EditorialSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EditorialUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EditorialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EditorialWhereUniqueInput;
};

/** A connection to a list of items. */
export type EditorialConnection = {
  __typename?: 'EditorialConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EditorialEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EditorialCreateInput = {
  artistStatement?: InputMaybe<Scalars['RichTextAST']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  gallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  seo?: InputMaybe<PageMetaSeoCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EditorialCreateManyInlineInput = {
  /** Connect multiple existing Editorial documents */
  connect?: InputMaybe<Array<EditorialWhereUniqueInput>>;
  /** Create and connect multiple existing Editorial documents */
  create?: InputMaybe<Array<EditorialCreateInput>>;
};

export type EditorialCreateOneInlineInput = {
  /** Connect one existing Editorial document */
  connect?: InputMaybe<EditorialWhereUniqueInput>;
  /** Create and connect one Editorial document */
  create?: InputMaybe<EditorialCreateInput>;
};

/** An edge in a connection. */
export type EditorialEdge = {
  __typename?: 'EditorialEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Editorial;
};

/** Identifies documents */
export type EditorialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EditorialWhereStageInput>;
  documentInStages_none?: InputMaybe<EditorialWhereStageInput>;
  documentInStages_some?: InputMaybe<EditorialWhereStageInput>;
  /** All values containing the given json path. */
  gallery_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  gallery_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EditorialOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EditorialUpdateInput = {
  artistStatement?: InputMaybe<Scalars['RichTextAST']['input']>;
  gallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  seo?: InputMaybe<PageMetaSeoUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialUpdateManyInlineInput = {
  /** Connect multiple existing Editorial documents */
  connect?: InputMaybe<Array<EditorialConnectInput>>;
  /** Create and connect multiple Editorial documents */
  create?: InputMaybe<Array<EditorialCreateInput>>;
  /** Delete multiple Editorial documents */
  delete?: InputMaybe<Array<EditorialWhereUniqueInput>>;
  /** Disconnect multiple Editorial documents */
  disconnect?: InputMaybe<Array<EditorialWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Editorial documents */
  set?: InputMaybe<Array<EditorialWhereUniqueInput>>;
  /** Update multiple Editorial documents */
  update?: InputMaybe<Array<EditorialUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Editorial documents */
  upsert?: InputMaybe<Array<EditorialUpsertWithNestedWhereUniqueInput>>;
};

export type EditorialUpdateManyInput = {
  artistStatement?: InputMaybe<Scalars['RichTextAST']['input']>;
  gallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EditorialUpdateManyInput;
  /** Document search */
  where: EditorialWhereInput;
};

export type EditorialUpdateOneInlineInput = {
  /** Connect existing Editorial document */
  connect?: InputMaybe<EditorialWhereUniqueInput>;
  /** Create and connect one Editorial document */
  create?: InputMaybe<EditorialCreateInput>;
  /** Delete currently connected Editorial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Editorial document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Editorial document */
  update?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Editorial document */
  upsert?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
};

export type EditorialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EditorialUpdateInput;
  /** Unique document search */
  where: EditorialWhereUniqueInput;
};

export type EditorialUpsertInput = {
  /** Create document if it didn't exist */
  create: EditorialCreateInput;
  /** Update document if it exists */
  update: EditorialUpdateInput;
};

export type EditorialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EditorialUpsertInput;
  /** Unique document search */
  where: EditorialWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EditorialWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type EditorialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EditorialWhereStageInput>;
  documentInStages_none?: InputMaybe<EditorialWhereStageInput>;
  documentInStages_some?: InputMaybe<EditorialWhereStageInput>;
  /** All values containing the given json path. */
  gallery_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  gallery_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EditorialWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EditorialWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EditorialWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EditorialWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EditorialWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Editorial record uniquely */
export type EditorialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Add a margin between this Element and the one above it */
export enum ElementMargin {
  Large = 'Large',
  Medium = 'Medium',
  None = 'None',
  Small = 'Small'
}

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  About = 'About',
  AccordionItem = 'AccordionItem',
  Appointment = 'Appointment',
  /** Asset system model */
  Asset = 'Asset',
  Collection = 'Collection',
  /** General settings may be overwritten by more specific components settings in specific instances** */
  ComponentGeneralConfig = 'ComponentGeneralConfig',
  Configuration = 'Configuration',
  Contact = 'Contact',
  Content = 'Content',
  /** Formally known as "Generic Grid Content" in the old Shopify Theme. Repeatable blocks along a single row that may be used as a CTA or to highlight important information */
  ContentTile = 'ContentTile',
  CustomWidget = 'CustomWidget',
  Editorial = 'Editorial',
  FeaturedCollection = 'FeaturedCollection',
  FeaturedProductData = 'FeaturedProductData',
  Form = 'Form',
  ImageColumn = 'ImageColumn',
  LandingPage = 'LandingPage',
  Link = 'Link',
  /** This component displays an image hosted on cloudinary or vimeo embed along with extra configuration */
  Media = 'Media',
  Page = 'Page',
  PageMetaSeo = 'PageMetaSeo',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Section = 'Section',
  Tile = 'Tile',
  TwoColumnLayout = 'TwoColumnLayout',
  /** User system model */
  User = 'User',
  VimeoEmbed = 'VimeoEmbed'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type FeaturedCollection = Entity & {
  __typename?: 'FeaturedCollection';
  generalConfig?: Maybe<ComponentGeneralConfig>;
  /** Optional Heading to render above the product collection */
  heading?: Maybe<Scalars['String']['output']>;
  /** When the number of products do not fit the grid, hide the remainder in the last row. For instance, if there are 4 products and each row contains 3 products, hide the last product. */
  hideIncompleteRow: Scalars['Boolean']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Select the Products that will be displayed in this widget */
  products: Array<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** Uses the new design for the product cards.  */
  useNewProductCard: Scalars['Boolean']['output'];
};


export type FeaturedCollectionGeneralConfigArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FeaturedCollectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeaturedCollectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeaturedCollectionConnection = {
  __typename?: 'FeaturedCollectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeaturedCollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeaturedCollectionCreateInput = {
  generalConfig?: InputMaybe<ComponentGeneralConfigCreateOneInlineInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  hideIncompleteRow: Scalars['Boolean']['input'];
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  useNewProductCard: Scalars['Boolean']['input'];
};

export type FeaturedCollectionCreateManyInlineInput = {
  /** Create and connect multiple existing FeaturedCollection documents */
  create?: InputMaybe<Array<FeaturedCollectionCreateInput>>;
};

export type FeaturedCollectionCreateOneInlineInput = {
  /** Create and connect one FeaturedCollection document */
  create?: InputMaybe<FeaturedCollectionCreateInput>;
};

export type FeaturedCollectionCreateWithPositionInput = {
  /** Document to create */
  data: FeaturedCollectionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FeaturedCollectionEdge = {
  __typename?: 'FeaturedCollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FeaturedCollection;
};

/** Identifies documents */
export type FeaturedCollectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedCollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedCollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedCollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  hideIncompleteRow?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hideIncompleteRow_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  products_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  products_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  products_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  products_not?: InputMaybe<Array<Scalars['String']['input']>>;
  useNewProductCard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  useNewProductCard_not?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FeaturedCollectionOrderByInput {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  HideIncompleteRowAsc = 'hideIncompleteRow_ASC',
  HideIncompleteRowDesc = 'hideIncompleteRow_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProductsAsc = 'products_ASC',
  ProductsDesc = 'products_DESC',
  UseNewProductCardAsc = 'useNewProductCard_ASC',
  UseNewProductCardDesc = 'useNewProductCard_DESC'
}

export type FeaturedCollectionParent = Page;

export type FeaturedCollectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type FeaturedCollectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type FeaturedCollectionParentCreateManyInlineInput = {
  /** Connect multiple existing FeaturedCollectionParent documents */
  connect?: InputMaybe<Array<FeaturedCollectionParentWhereUniqueInput>>;
  /** Create and connect multiple existing FeaturedCollectionParent documents */
  create?: InputMaybe<Array<FeaturedCollectionParentCreateInput>>;
};

export type FeaturedCollectionParentCreateOneInlineInput = {
  /** Connect one existing FeaturedCollectionParent document */
  connect?: InputMaybe<FeaturedCollectionParentWhereUniqueInput>;
  /** Create and connect one FeaturedCollectionParent document */
  create?: InputMaybe<FeaturedCollectionParentCreateInput>;
};

export type FeaturedCollectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type FeaturedCollectionParentUpdateManyInlineInput = {
  /** Connect multiple existing FeaturedCollectionParent documents */
  connect?: InputMaybe<Array<FeaturedCollectionParentConnectInput>>;
  /** Create and connect multiple FeaturedCollectionParent documents */
  create?: InputMaybe<Array<FeaturedCollectionParentCreateInput>>;
  /** Delete multiple FeaturedCollectionParent documents */
  delete?: InputMaybe<Array<FeaturedCollectionParentWhereUniqueInput>>;
  /** Disconnect multiple FeaturedCollectionParent documents */
  disconnect?: InputMaybe<Array<FeaturedCollectionParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FeaturedCollectionParent documents */
  set?: InputMaybe<Array<FeaturedCollectionParentWhereUniqueInput>>;
  /** Update multiple FeaturedCollectionParent documents */
  update?: InputMaybe<Array<FeaturedCollectionParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FeaturedCollectionParent documents */
  upsert?: InputMaybe<Array<FeaturedCollectionParentUpsertWithNestedWhereUniqueInput>>;
};

export type FeaturedCollectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type FeaturedCollectionParentUpdateOneInlineInput = {
  /** Connect existing FeaturedCollectionParent document */
  connect?: InputMaybe<FeaturedCollectionParentWhereUniqueInput>;
  /** Create and connect one FeaturedCollectionParent document */
  create?: InputMaybe<FeaturedCollectionParentCreateInput>;
  /** Delete currently connected FeaturedCollectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FeaturedCollectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeaturedCollectionParent document */
  update?: InputMaybe<FeaturedCollectionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeaturedCollectionParent document */
  upsert?: InputMaybe<FeaturedCollectionParentUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedCollectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type FeaturedCollectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedCollectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type FeaturedCollectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type FeaturedCollectionUpdateInput = {
  generalConfig?: InputMaybe<ComponentGeneralConfigUpdateOneInlineInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  hideIncompleteRow?: InputMaybe<Scalars['Boolean']['input']>;
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  useNewProductCard?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedCollectionUpdateManyInlineInput = {
  /** Create and connect multiple FeaturedCollection component instances */
  create?: InputMaybe<Array<FeaturedCollectionCreateWithPositionInput>>;
  /** Delete multiple FeaturedCollection documents */
  delete?: InputMaybe<Array<FeaturedCollectionWhereUniqueInput>>;
  /** Update multiple FeaturedCollection component instances */
  update?: InputMaybe<Array<FeaturedCollectionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FeaturedCollection component instances */
  upsert?: InputMaybe<Array<FeaturedCollectionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeaturedCollectionUpdateManyInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  hideIncompleteRow?: InputMaybe<Scalars['Boolean']['input']>;
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  useNewProductCard?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedCollectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeaturedCollectionUpdateManyInput;
  /** Document search */
  where: FeaturedCollectionWhereInput;
};

export type FeaturedCollectionUpdateOneInlineInput = {
  /** Create and connect one FeaturedCollection document */
  create?: InputMaybe<FeaturedCollectionCreateInput>;
  /** Delete currently connected FeaturedCollection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeaturedCollection document */
  update?: InputMaybe<FeaturedCollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeaturedCollection document */
  upsert?: InputMaybe<FeaturedCollectionUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedCollectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FeaturedCollectionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeaturedCollectionWhereUniqueInput;
};

export type FeaturedCollectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeaturedCollectionUpdateInput;
  /** Unique document search */
  where: FeaturedCollectionWhereUniqueInput;
};

export type FeaturedCollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: FeaturedCollectionCreateInput;
  /** Update document if it exists */
  update: FeaturedCollectionUpdateInput;
};

export type FeaturedCollectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FeaturedCollectionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeaturedCollectionWhereUniqueInput;
};

export type FeaturedCollectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeaturedCollectionUpsertInput;
  /** Unique document search */
  where: FeaturedCollectionWhereUniqueInput;
};

/** Identifies documents */
export type FeaturedCollectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedCollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedCollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedCollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  hideIncompleteRow?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hideIncompleteRow_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  products?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  products_contains_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  products_contains_none?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  products_contains_some?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  products_not?: InputMaybe<Array<Scalars['String']['input']>>;
  useNewProductCard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  useNewProductCard_not?: InputMaybe<Scalars['Boolean']['input']>;
};

/** References FeaturedCollection record uniquely */
export type FeaturedCollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FeaturedProductData = Entity & {
  __typename?: 'FeaturedProductData';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  pid?: Maybe<Scalars['String']['output']>;
  productGallery: Array<Scalars['Json']['output']>;
  /** System stage field */
  stage: Stage;
  swatch?: Maybe<Scalars['Json']['output']>;
};

export type FeaturedProductDataConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeaturedProductDataWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeaturedProductDataConnection = {
  __typename?: 'FeaturedProductDataConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeaturedProductDataEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeaturedProductDataCreateInput = {
  pid?: InputMaybe<Scalars['String']['input']>;
  productGallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  swatch?: InputMaybe<Scalars['Json']['input']>;
};

export type FeaturedProductDataCreateManyInlineInput = {
  /** Create and connect multiple existing FeaturedProductData documents */
  create?: InputMaybe<Array<FeaturedProductDataCreateInput>>;
};

export type FeaturedProductDataCreateOneInlineInput = {
  /** Create and connect one FeaturedProductData document */
  create?: InputMaybe<FeaturedProductDataCreateInput>;
};

export type FeaturedProductDataCreateWithPositionInput = {
  /** Document to create */
  data: FeaturedProductDataCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FeaturedProductDataEdge = {
  __typename?: 'FeaturedProductDataEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: FeaturedProductData;
};

/** Identifies documents */
export type FeaturedProductDataManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedProductDataWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedProductDataWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedProductDataWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pid?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pid_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pid_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pid_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pid_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pid_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pid_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  productGallery_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  productGallery_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  /** All values containing the given json path. */
  swatch_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  swatch_value_recursive?: InputMaybe<Scalars['Json']['input']>;
};

export enum FeaturedProductDataOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PidAsc = 'pid_ASC',
  PidDesc = 'pid_DESC'
}

export type FeaturedProductDataParent = CustomWidget;

export type FeaturedProductDataParentConnectInput = {
  CustomWidget?: InputMaybe<CustomWidgetConnectInput>;
};

export type FeaturedProductDataParentCreateInput = {
  CustomWidget?: InputMaybe<CustomWidgetCreateInput>;
};

export type FeaturedProductDataParentCreateManyInlineInput = {
  /** Create and connect multiple existing FeaturedProductDataParent documents */
  create?: InputMaybe<Array<FeaturedProductDataParentCreateInput>>;
};

export type FeaturedProductDataParentCreateOneInlineInput = {
  /** Create and connect one FeaturedProductDataParent document */
  create?: InputMaybe<FeaturedProductDataParentCreateInput>;
};

export type FeaturedProductDataParentCreateWithPositionInput = {
  CustomWidget?: InputMaybe<CustomWidgetCreateWithPositionInput>;
};

export type FeaturedProductDataParentUpdateInput = {
  CustomWidget?: InputMaybe<CustomWidgetUpdateInput>;
};

export type FeaturedProductDataParentUpdateManyInlineInput = {
  /** Create and connect multiple FeaturedProductDataParent component instances */
  create?: InputMaybe<Array<FeaturedProductDataParentCreateWithPositionInput>>;
  /** Delete multiple FeaturedProductDataParent documents */
  delete?: InputMaybe<Array<FeaturedProductDataParentWhereUniqueInput>>;
  /** Update multiple FeaturedProductDataParent component instances */
  update?: InputMaybe<Array<FeaturedProductDataParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FeaturedProductDataParent component instances */
  upsert?: InputMaybe<Array<FeaturedProductDataParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeaturedProductDataParentUpdateManyWithNestedWhereInput = {
  CustomWidget?: InputMaybe<CustomWidgetUpdateManyWithNestedWhereInput>;
};

export type FeaturedProductDataParentUpdateOneInlineInput = {
  /** Create and connect one FeaturedProductDataParent document */
  create?: InputMaybe<FeaturedProductDataParentCreateInput>;
  /** Delete currently connected FeaturedProductDataParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeaturedProductDataParent document */
  update?: InputMaybe<FeaturedProductDataParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeaturedProductDataParent document */
  upsert?: InputMaybe<FeaturedProductDataParentUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedProductDataParentUpdateWithNestedWhereUniqueAndPositionInput = {
  CustomWidget?: InputMaybe<CustomWidgetUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FeaturedProductDataParentUpdateWithNestedWhereUniqueInput = {
  CustomWidget?: InputMaybe<CustomWidgetUpdateWithNestedWhereUniqueInput>;
};

export type FeaturedProductDataParentUpsertWithNestedWhereUniqueAndPositionInput = {
  CustomWidget?: InputMaybe<CustomWidgetUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FeaturedProductDataParentUpsertWithNestedWhereUniqueInput = {
  CustomWidget?: InputMaybe<CustomWidgetUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedProductDataParentWhereInput = {
  CustomWidget?: InputMaybe<CustomWidgetWhereInput>;
};

export type FeaturedProductDataParentWhereUniqueInput = {
  CustomWidget?: InputMaybe<CustomWidgetWhereUniqueInput>;
};

export type FeaturedProductDataUpdateInput = {
  pid?: InputMaybe<Scalars['String']['input']>;
  productGallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  swatch?: InputMaybe<Scalars['Json']['input']>;
};

export type FeaturedProductDataUpdateManyInlineInput = {
  /** Create and connect multiple FeaturedProductData component instances */
  create?: InputMaybe<Array<FeaturedProductDataCreateWithPositionInput>>;
  /** Delete multiple FeaturedProductData documents */
  delete?: InputMaybe<Array<FeaturedProductDataWhereUniqueInput>>;
  /** Update multiple FeaturedProductData component instances */
  update?: InputMaybe<Array<FeaturedProductDataUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FeaturedProductData component instances */
  upsert?: InputMaybe<Array<FeaturedProductDataUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeaturedProductDataUpdateManyInput = {
  pid?: InputMaybe<Scalars['String']['input']>;
  productGallery?: InputMaybe<Array<Scalars['Json']['input']>>;
  swatch?: InputMaybe<Scalars['Json']['input']>;
};

export type FeaturedProductDataUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeaturedProductDataUpdateManyInput;
  /** Document search */
  where: FeaturedProductDataWhereInput;
};

export type FeaturedProductDataUpdateOneInlineInput = {
  /** Create and connect one FeaturedProductData document */
  create?: InputMaybe<FeaturedProductDataCreateInput>;
  /** Delete currently connected FeaturedProductData document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FeaturedProductData document */
  update?: InputMaybe<FeaturedProductDataUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeaturedProductData document */
  upsert?: InputMaybe<FeaturedProductDataUpsertWithNestedWhereUniqueInput>;
};

export type FeaturedProductDataUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FeaturedProductDataUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeaturedProductDataWhereUniqueInput;
};

export type FeaturedProductDataUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeaturedProductDataUpdateInput;
  /** Unique document search */
  where: FeaturedProductDataWhereUniqueInput;
};

export type FeaturedProductDataUpsertInput = {
  /** Create document if it didn't exist */
  create: FeaturedProductDataCreateInput;
  /** Update document if it exists */
  update: FeaturedProductDataUpdateInput;
};

export type FeaturedProductDataUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FeaturedProductDataUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeaturedProductDataWhereUniqueInput;
};

export type FeaturedProductDataUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeaturedProductDataUpsertInput;
  /** Unique document search */
  where: FeaturedProductDataWhereUniqueInput;
};

/** Identifies documents */
export type FeaturedProductDataWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeaturedProductDataWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeaturedProductDataWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeaturedProductDataWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  pid?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pid_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pid_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pid_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pid_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pid_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pid_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given json path. */
  productGallery_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  productGallery_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  /** All values containing the given json path. */
  swatch_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  swatch_value_recursive?: InputMaybe<Scalars['Json']['input']>;
};

/** References FeaturedProductData record uniquely */
export type FeaturedProductDataWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Form = Entity & {
  __typename?: 'Form';
  generalConfig?: Maybe<ComponentGeneralConfig>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
  type?: Maybe<Forms>;
};


export type FormGeneralConfigArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FormConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormConnection = {
  __typename?: 'FormConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormCreateInput = {
  generalConfig?: InputMaybe<ComponentGeneralConfigCreateOneInlineInput>;
  type?: InputMaybe<Forms>;
};

export type FormCreateManyInlineInput = {
  /** Create and connect multiple existing Form documents */
  create?: InputMaybe<Array<FormCreateInput>>;
};

export type FormCreateOneInlineInput = {
  /** Create and connect one Form document */
  create?: InputMaybe<FormCreateInput>;
};

export type FormCreateWithPositionInput = {
  /** Document to create */
  data: FormCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FormEdge = {
  __typename?: 'FormEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Form;
};

/** Identifies documents */
export type FormManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Forms>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<Forms>>>;
  /** Any other value that exists and is not equal to the given value. */
  type_not?: InputMaybe<Forms>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<Forms>>>;
};

export enum FormOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type FormParent = Page | TwoColumnLayout;

export type FormParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutConnectInput>;
};

export type FormParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutCreateInput>;
};

export type FormParentCreateManyInlineInput = {
  /** Connect multiple existing FormParent documents */
  connect?: InputMaybe<Array<FormParentWhereUniqueInput>>;
  /** Create and connect multiple existing FormParent documents */
  create?: InputMaybe<Array<FormParentCreateInput>>;
};

export type FormParentCreateOneInlineInput = {
  /** Connect one existing FormParent document */
  connect?: InputMaybe<FormParentWhereUniqueInput>;
  /** Create and connect one FormParent document */
  create?: InputMaybe<FormParentCreateInput>;
};

export type FormParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateInput>;
};

export type FormParentUpdateManyInlineInput = {
  /** Connect multiple existing FormParent documents */
  connect?: InputMaybe<Array<FormParentConnectInput>>;
  /** Create and connect multiple FormParent documents */
  create?: InputMaybe<Array<FormParentCreateInput>>;
  /** Delete multiple FormParent documents */
  delete?: InputMaybe<Array<FormParentWhereUniqueInput>>;
  /** Disconnect multiple FormParent documents */
  disconnect?: InputMaybe<Array<FormParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormParent documents */
  set?: InputMaybe<Array<FormParentWhereUniqueInput>>;
  /** Update multiple FormParent documents */
  update?: InputMaybe<Array<FormParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormParent documents */
  upsert?: InputMaybe<Array<FormParentUpsertWithNestedWhereUniqueInput>>;
};

export type FormParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateManyWithNestedWhereInput>;
};

export type FormParentUpdateOneInlineInput = {
  /** Connect existing FormParent document */
  connect?: InputMaybe<FormParentWhereUniqueInput>;
  /** Create and connect one FormParent document */
  create?: InputMaybe<FormParentCreateInput>;
  /** Delete currently connected FormParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected FormParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single FormParent document */
  update?: InputMaybe<FormParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormParent document */
  upsert?: InputMaybe<FormParentUpsertWithNestedWhereUniqueInput>;
};

export type FormParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateWithNestedWhereUniqueInput>;
};

export type FormParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpsertWithNestedWhereUniqueInput>;
};

export type FormParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutWhereInput>;
};

export type FormParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutWhereUniqueInput>;
};

export type FormUpdateInput = {
  generalConfig?: InputMaybe<ComponentGeneralConfigUpdateOneInlineInput>;
  type?: InputMaybe<Forms>;
};

export type FormUpdateManyInlineInput = {
  /** Create and connect multiple Form component instances */
  create?: InputMaybe<Array<FormCreateWithPositionInput>>;
  /** Delete multiple Form documents */
  delete?: InputMaybe<Array<FormWhereUniqueInput>>;
  /** Update multiple Form component instances */
  update?: InputMaybe<Array<FormUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Form component instances */
  upsert?: InputMaybe<Array<FormUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormUpdateManyInput = {
  type?: InputMaybe<Forms>;
};

export type FormUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormUpdateManyInput;
  /** Document search */
  where: FormWhereInput;
};

export type FormUpdateOneInlineInput = {
  /** Create and connect one Form document */
  create?: InputMaybe<FormCreateInput>;
  /** Delete currently connected Form document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Form document */
  update?: InputMaybe<FormUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Form document */
  upsert?: InputMaybe<FormUpsertWithNestedWhereUniqueInput>;
};

export type FormUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FormUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormWhereUniqueInput;
};

export type FormUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormUpdateInput;
  /** Unique document search */
  where: FormWhereUniqueInput;
};

export type FormUpsertInput = {
  /** Create document if it didn't exist */
  create: FormCreateInput;
  /** Update document if it exists */
  update: FormUpdateInput;
};

export type FormUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FormUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormWhereUniqueInput;
};

export type FormUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormUpsertInput;
  /** Unique document search */
  where: FormWhereUniqueInput;
};

/** Identifies documents */
export type FormWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  generalConfig?: InputMaybe<ComponentGeneralConfigWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Forms>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<Forms>>>;
  /** Any other value that exists and is not equal to the given value. */
  type_not?: InputMaybe<Forms>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<Forms>>>;
};

/** References Form record uniquely */
export type FormWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum Forms {
  Appointment = 'Appointment',
  Contact = 'Contact',
  Newsletter = 'Newsletter'
}

export type ImageColumn = Entity & {
  __typename?: 'ImageColumn';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};

/** A connection to a list of items. */
export type ImageColumnConnection = {
  __typename?: 'ImageColumnConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageColumnEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageColumnCreateInput = {
  /** No fields in create input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ImageColumnCreateWithPositionInput = {
  /** Document to create */
  data: ImageColumnCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ImageColumnEdge = {
  __typename?: 'ImageColumnEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ImageColumn;
};

/** Identifies documents */
export type ImageColumnManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageColumnOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type ImageColumnUpdateInput = {
  /** No fields in update input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ImageColumnUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type ImageColumnUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageColumnUpdateManyInput;
  /** Document search */
  where: ImageColumnWhereInput;
};

export type ImageColumnUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageColumnUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageColumnWhereUniqueInput;
};

export type ImageColumnUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageColumnUpdateInput;
  /** Unique document search */
  where: ImageColumnWhereUniqueInput;
};

export type ImageColumnUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageColumnCreateInput;
  /** Update document if it exists */
  update: ImageColumnUpdateInput;
};

export type ImageColumnUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageColumnUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageColumnWhereUniqueInput;
};

export type ImageColumnUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageColumnUpsertInput;
  /** Unique document search */
  where: ImageColumnWhereUniqueInput;
};

/** Identifies documents */
export type ImageColumnWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageColumnWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageColumnWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageColumnWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References ImageColumn record uniquely */
export type ImageColumnWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type LandingPage = Entity & Node & {
  __typename?: 'LandingPage';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<LandingPage>;
  featuredImage?: Maybe<Asset>;
  /** List of LandingPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The page name (for internal use only) */
  internalName?: Maybe<Scalars['String']['output']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<LandingPage>;
  /** The Meta Description is used for the description in the SERP. The recommended length is between 50 and 160 characters */
  metaDescription?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Path>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']['output']>;
  /** Recommended length is 16:9 */
  socialSharingImage?: Maybe<Asset>;
  /** System stage field */
  stage: Stage;
  /** The title is displayed in the browser tab and used for the SERP */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  variants: Array<LandingPageVariants>;
};


export type LandingPageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type LandingPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LandingPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type LandingPageFeaturedImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LandingPageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type LandingPageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


export type LandingPagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type LandingPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LandingPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type LandingPageSocialSharingImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LandingPageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type LandingPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type LandingPageVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LandingPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LandingPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type LandingPageConnection = {
  __typename?: 'LandingPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LandingPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LandingPageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  featuredImage?: InputMaybe<AssetCreateOneInlineInput>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<LandingPageCreateLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Path>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socialSharingImage?: InputMaybe<AssetCreateOneInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  variants?: InputMaybe<LandingPageVariantsCreateManyInlineInput>;
};

export type LandingPageCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingPageCreateLocalizationInput = {
  /** Localization input */
  data: LandingPageCreateLocalizationDataInput;
  locale: Locale;
};

export type LandingPageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<LandingPageCreateLocalizationInput>>;
};

export type LandingPageCreateManyInlineInput = {
  /** Connect multiple existing LandingPage documents */
  connect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Create and connect multiple existing LandingPage documents */
  create?: InputMaybe<Array<LandingPageCreateInput>>;
};

export type LandingPageCreateOneInlineInput = {
  /** Connect one existing LandingPage document */
  connect?: InputMaybe<LandingPageWhereUniqueInput>;
  /** Create and connect one LandingPage document */
  create?: InputMaybe<LandingPageCreateInput>;
};

/** An edge in a connection. */
export type LandingPageEdge = {
  __typename?: 'LandingPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LandingPage;
};

/** Identifies documents */
export type LandingPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
  featuredImage?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  internalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  internalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  internalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  internalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Path>;
  /** All values that are contained in given list. */
  path_in?: InputMaybe<Array<InputMaybe<Path>>>;
  /** Any other value that exists and is not equal to the given value. */
  path_not?: InputMaybe<Path>;
  /** All values that are not contained in given list. */
  path_not_in?: InputMaybe<Array<InputMaybe<Path>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  socialSharingImage?: InputMaybe<AssetWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty */
  variants_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  variants_some?: InputMaybe<LandingPageVariantsWhereInput>;
};

export enum LandingPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  PathAsc = 'path_ASC',
  PathDesc = 'path_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type LandingPageUpdateInput = {
  featuredImage?: InputMaybe<AssetUpdateOneInlineInput>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<LandingPageUpdateLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Path>;
  slug?: InputMaybe<Scalars['String']['input']>;
  socialSharingImage?: InputMaybe<AssetUpdateOneInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<LandingPageVariantsUpdateManyInlineInput>;
};

export type LandingPageUpdateLocalizationDataInput = {
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateLocalizationInput = {
  data: LandingPageUpdateLocalizationDataInput;
  locale: Locale;
};

export type LandingPageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<LandingPageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<LandingPageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<LandingPageUpsertLocalizationInput>>;
};

export type LandingPageUpdateManyInlineInput = {
  /** Connect multiple existing LandingPage documents */
  connect?: InputMaybe<Array<LandingPageConnectInput>>;
  /** Create and connect multiple LandingPage documents */
  create?: InputMaybe<Array<LandingPageCreateInput>>;
  /** Delete multiple LandingPage documents */
  delete?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Disconnect multiple LandingPage documents */
  disconnect?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LandingPage documents */
  set?: InputMaybe<Array<LandingPageWhereUniqueInput>>;
  /** Update multiple LandingPage documents */
  update?: InputMaybe<Array<LandingPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LandingPage documents */
  upsert?: InputMaybe<Array<LandingPageUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPageUpdateManyInput = {
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<LandingPageUpdateManyLocalizationsInput>;
  /** metaDescription input for default locale (en) */
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Path>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyLocalizationDataInput = {
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageUpdateManyLocalizationInput = {
  data: LandingPageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type LandingPageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<LandingPageUpdateManyLocalizationInput>>;
};

export type LandingPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LandingPageUpdateManyInput;
  /** Document search */
  where: LandingPageWhereInput;
};

export type LandingPageUpdateOneInlineInput = {
  /** Connect existing LandingPage document */
  connect?: InputMaybe<LandingPageWhereUniqueInput>;
  /** Create and connect one LandingPage document */
  create?: InputMaybe<LandingPageCreateInput>;
  /** Delete currently connected LandingPage document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LandingPage document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPage document */
  update?: InputMaybe<LandingPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPage document */
  upsert?: InputMaybe<LandingPageUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LandingPageUpdateInput;
  /** Unique document search */
  where: LandingPageWhereUniqueInput;
};

export type LandingPageUpsertInput = {
  /** Create document if it didn't exist */
  create: LandingPageCreateInput;
  /** Update document if it exists */
  update: LandingPageUpdateInput;
};

export type LandingPageUpsertLocalizationInput = {
  create: LandingPageCreateLocalizationDataInput;
  locale: Locale;
  update: LandingPageUpdateLocalizationDataInput;
};

export type LandingPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LandingPageUpsertInput;
  /** Unique document search */
  where: LandingPageWhereUniqueInput;
};

export type LandingPageVariants = Content;

export type LandingPageVariantsConnectInput = {
  Content?: InputMaybe<ContentConnectInput>;
};

export type LandingPageVariantsCreateInput = {
  Content?: InputMaybe<ContentCreateInput>;
};

export type LandingPageVariantsCreateManyInlineInput = {
  /** Connect multiple existing LandingPageVariants documents */
  connect?: InputMaybe<Array<LandingPageVariantsWhereUniqueInput>>;
  /** Create and connect multiple existing LandingPageVariants documents */
  create?: InputMaybe<Array<LandingPageVariantsCreateInput>>;
};

export type LandingPageVariantsCreateOneInlineInput = {
  /** Connect one existing LandingPageVariants document */
  connect?: InputMaybe<LandingPageVariantsWhereUniqueInput>;
  /** Create and connect one LandingPageVariants document */
  create?: InputMaybe<LandingPageVariantsCreateInput>;
};

export type LandingPageVariantsUpdateInput = {
  Content?: InputMaybe<ContentUpdateInput>;
};

export type LandingPageVariantsUpdateManyInlineInput = {
  /** Connect multiple existing LandingPageVariants documents */
  connect?: InputMaybe<Array<LandingPageVariantsConnectInput>>;
  /** Create and connect multiple LandingPageVariants documents */
  create?: InputMaybe<Array<LandingPageVariantsCreateInput>>;
  /** Delete multiple LandingPageVariants documents */
  delete?: InputMaybe<Array<LandingPageVariantsWhereUniqueInput>>;
  /** Disconnect multiple LandingPageVariants documents */
  disconnect?: InputMaybe<Array<LandingPageVariantsWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LandingPageVariants documents */
  set?: InputMaybe<Array<LandingPageVariantsWhereUniqueInput>>;
  /** Update multiple LandingPageVariants documents */
  update?: InputMaybe<Array<LandingPageVariantsUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LandingPageVariants documents */
  upsert?: InputMaybe<Array<LandingPageVariantsUpsertWithNestedWhereUniqueInput>>;
};

export type LandingPageVariantsUpdateManyWithNestedWhereInput = {
  Content?: InputMaybe<ContentUpdateManyWithNestedWhereInput>;
};

export type LandingPageVariantsUpdateOneInlineInput = {
  /** Connect existing LandingPageVariants document */
  connect?: InputMaybe<LandingPageVariantsWhereUniqueInput>;
  /** Create and connect one LandingPageVariants document */
  create?: InputMaybe<LandingPageVariantsCreateInput>;
  /** Delete currently connected LandingPageVariants document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LandingPageVariants document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LandingPageVariants document */
  update?: InputMaybe<LandingPageVariantsUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LandingPageVariants document */
  upsert?: InputMaybe<LandingPageVariantsUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageVariantsUpdateWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpdateWithNestedWhereUniqueInput>;
};

export type LandingPageVariantsUpsertWithNestedWhereUniqueInput = {
  Content?: InputMaybe<ContentUpsertWithNestedWhereUniqueInput>;
};

export type LandingPageVariantsWhereInput = {
  Content?: InputMaybe<ContentWhereInput>;
};

export type LandingPageVariantsWhereUniqueInput = {
  Content?: InputMaybe<ContentWhereUniqueInput>;
};

/** This contains a set of filters that can be used to compare values internally */
export type LandingPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type LandingPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_none?: InputMaybe<LandingPageWhereStageInput>;
  documentInStages_some?: InputMaybe<LandingPageWhereStageInput>;
  featuredImage?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  internalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  internalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  internalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  internalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Path>;
  /** All values that are contained in given list. */
  path_in?: InputMaybe<Array<InputMaybe<Path>>>;
  /** Any other value that exists and is not equal to the given value. */
  path_not?: InputMaybe<Path>;
  /** All values that are not contained in given list. */
  path_not_in?: InputMaybe<Array<InputMaybe<Path>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  socialSharingImage?: InputMaybe<AssetWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty */
  variants_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  variants_some?: InputMaybe<LandingPageVariantsWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type LandingPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LandingPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<LandingPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References LandingPage record uniquely */
export type LandingPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Link = Entity & {
  __typename?: 'Link';
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The link label is used for the link text in the case ofs some components. In others, for example when the link is used with images or the "content tile", whatever you input here is just used to generate the "title"; the text that appears in the browsers native tooltip when you hover over a link. */
  linkLabel?: Maybe<Scalars['String']['output']>;
  openInNewTab: Scalars['Boolean']['output'];
  /** System stage field */
  stage: Stage;
  /** You can link to an external URL by using the absolute path, "https://", relative path, "/collections/nomaintenance/", email, "mailto: contact@nomaintenance.us" or phone, "tel: +1-000-000-0000" */
  urlString?: Maybe<Scalars['String']['output']>;
};

export type LinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: LinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type LinkConnection = {
  __typename?: 'LinkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<LinkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type LinkCreateInput = {
  linkLabel?: InputMaybe<Scalars['String']['input']>;
  openInNewTab: Scalars['Boolean']['input'];
  urlString?: InputMaybe<Scalars['String']['input']>;
};

export type LinkCreateManyInlineInput = {
  /** Create and connect multiple existing Link documents */
  create?: InputMaybe<Array<LinkCreateInput>>;
};

export type LinkCreateOneInlineInput = {
  /** Create and connect one Link document */
  create?: InputMaybe<LinkCreateInput>;
};

export type LinkCreateWithPositionInput = {
  /** Document to create */
  data: LinkCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type LinkEdge = {
  __typename?: 'LinkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Link;
};

/** Identifies documents */
export type LinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  linkLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  linkLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  linkLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  linkLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  linkLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  linkLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  linkLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  linkLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  linkLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  openInNewTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  urlString?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  urlString_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  urlString_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  urlString_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urlString_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  urlString_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  urlString_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  urlString_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  urlString_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  urlString_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum LinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkLabelAsc = 'linkLabel_ASC',
  LinkLabelDesc = 'linkLabel_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  UrlStringAsc = 'urlString_ASC',
  UrlStringDesc = 'urlString_DESC'
}

export type LinkParent = About | Tile;

export type LinkParentConnectInput = {
  About?: InputMaybe<AboutConnectInput>;
  Tile?: InputMaybe<TileConnectInput>;
};

export type LinkParentCreateInput = {
  About?: InputMaybe<AboutCreateInput>;
  Tile?: InputMaybe<TileCreateInput>;
};

export type LinkParentCreateManyInlineInput = {
  /** Connect multiple existing LinkParent documents */
  connect?: InputMaybe<Array<LinkParentWhereUniqueInput>>;
  /** Create and connect multiple existing LinkParent documents */
  create?: InputMaybe<Array<LinkParentCreateInput>>;
};

export type LinkParentCreateOneInlineInput = {
  /** Connect one existing LinkParent document */
  connect?: InputMaybe<LinkParentWhereUniqueInput>;
  /** Create and connect one LinkParent document */
  create?: InputMaybe<LinkParentCreateInput>;
};

export type LinkParentUpdateInput = {
  About?: InputMaybe<AboutUpdateInput>;
  Tile?: InputMaybe<TileUpdateInput>;
};

export type LinkParentUpdateManyInlineInput = {
  /** Connect multiple existing LinkParent documents */
  connect?: InputMaybe<Array<LinkParentConnectInput>>;
  /** Create and connect multiple LinkParent documents */
  create?: InputMaybe<Array<LinkParentCreateInput>>;
  /** Delete multiple LinkParent documents */
  delete?: InputMaybe<Array<LinkParentWhereUniqueInput>>;
  /** Disconnect multiple LinkParent documents */
  disconnect?: InputMaybe<Array<LinkParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing LinkParent documents */
  set?: InputMaybe<Array<LinkParentWhereUniqueInput>>;
  /** Update multiple LinkParent documents */
  update?: InputMaybe<Array<LinkParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple LinkParent documents */
  upsert?: InputMaybe<Array<LinkParentUpsertWithNestedWhereUniqueInput>>;
};

export type LinkParentUpdateManyWithNestedWhereInput = {
  About?: InputMaybe<AboutUpdateManyWithNestedWhereInput>;
  Tile?: InputMaybe<TileUpdateManyWithNestedWhereInput>;
};

export type LinkParentUpdateOneInlineInput = {
  /** Connect existing LinkParent document */
  connect?: InputMaybe<LinkParentWhereUniqueInput>;
  /** Create and connect one LinkParent document */
  create?: InputMaybe<LinkParentCreateInput>;
  /** Delete currently connected LinkParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected LinkParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single LinkParent document */
  update?: InputMaybe<LinkParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single LinkParent document */
  upsert?: InputMaybe<LinkParentUpsertWithNestedWhereUniqueInput>;
};

export type LinkParentUpdateWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>;
  Tile?: InputMaybe<TileUpdateWithNestedWhereUniqueInput>;
};

export type LinkParentUpsertWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>;
  Tile?: InputMaybe<TileUpsertWithNestedWhereUniqueInput>;
};

export type LinkParentWhereInput = {
  About?: InputMaybe<AboutWhereInput>;
  Tile?: InputMaybe<TileWhereInput>;
};

export type LinkParentWhereUniqueInput = {
  About?: InputMaybe<AboutWhereUniqueInput>;
  Tile?: InputMaybe<TileWhereUniqueInput>;
};

export type LinkUpdateInput = {
  linkLabel?: InputMaybe<Scalars['String']['input']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  urlString?: InputMaybe<Scalars['String']['input']>;
};

export type LinkUpdateManyInlineInput = {
  /** Create and connect multiple Link component instances */
  create?: InputMaybe<Array<LinkCreateWithPositionInput>>;
  /** Delete multiple Link documents */
  delete?: InputMaybe<Array<LinkWhereUniqueInput>>;
  /** Update multiple Link component instances */
  update?: InputMaybe<Array<LinkUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Link component instances */
  upsert?: InputMaybe<Array<LinkUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type LinkUpdateManyInput = {
  linkLabel?: InputMaybe<Scalars['String']['input']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  urlString?: InputMaybe<Scalars['String']['input']>;
};

export type LinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LinkUpdateManyInput;
  /** Document search */
  where: LinkWhereInput;
};

export type LinkUpdateOneInlineInput = {
  /** Create and connect one Link document */
  create?: InputMaybe<LinkCreateInput>;
  /** Delete currently connected Link document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Link document */
  update?: InputMaybe<LinkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Link document */
  upsert?: InputMaybe<LinkUpsertWithNestedWhereUniqueInput>;
};

export type LinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LinkUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LinkWhereUniqueInput;
};

export type LinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LinkUpdateInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

export type LinkUpsertInput = {
  /** Create document if it didn't exist */
  create: LinkCreateInput;
  /** Update document if it exists */
  update: LinkUpdateInput;
};

export type LinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LinkUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: LinkWhereUniqueInput;
};

export type LinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LinkUpsertInput;
  /** Unique document search */
  where: LinkWhereUniqueInput;
};

/** Identifies documents */
export type LinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LinkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LinkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  linkLabel?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  linkLabel_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  linkLabel_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  linkLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  linkLabel_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  linkLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  linkLabel_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  linkLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  linkLabel_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  linkLabel_starts_with?: InputMaybe<Scalars['String']['input']>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  openInNewTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  urlString?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  urlString_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  urlString_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  urlString_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  urlString_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  urlString_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  urlString_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  urlString_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  urlString_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  urlString_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  Ja = 'ja'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

/** This component displays an image hosted on cloudinary or vimeo embed along with extra configuration */
export type Media = Entity & {
  __typename?: 'Media';
  /** If true, Image or video lazy loads; i.e on first load, page downloads a low-res placeholder image. When the image comes into view, the hi-res version of the image is asynchrnously downloaded and displayed. Best for content "below the fold". */
  hasLazyLoad?: Maybe<Scalars['Boolean']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Image will only render if no Vimeo ID has been set. */
  image?: Maybe<Scalars['Json']['output']>;
  /** Option fallback content to be displayed on mobile devices */
  mobileFallback?: Maybe<Scalars['Json']['output']>;
  /** System stage field */
  stage: Stage;
  vimeoEmbed?: Maybe<VimeoEmbed>;
};


/** This component displays an image hosted on cloudinary or vimeo embed along with extra configuration */
export type MediaVimeoEmbedArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MediaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MediaWhereUniqueInput;
};

/** A connection to a list of items. */
export type MediaConnection = {
  __typename?: 'MediaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MediaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MediaCreateInput = {
  hasLazyLoad?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  mobileFallback?: InputMaybe<Scalars['Json']['input']>;
  vimeoEmbed?: InputMaybe<VimeoEmbedCreateOneInlineInput>;
};

export type MediaCreateManyInlineInput = {
  /** Create and connect multiple existing Media documents */
  create?: InputMaybe<Array<MediaCreateInput>>;
};

export type MediaCreateOneInlineInput = {
  /** Create and connect one Media document */
  create?: InputMaybe<MediaCreateInput>;
};

export type MediaCreateWithPositionInput = {
  /** Document to create */
  data: MediaCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Media;
};

/** Identifies documents */
export type MediaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  hasLazyLoad?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasLazyLoad_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  image_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  image_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  /** All values containing the given json path. */
  mobileFallback_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  mobileFallback_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  vimeoEmbed?: InputMaybe<VimeoEmbedWhereInput>;
};

export enum MediaOrderByInput {
  HasLazyLoadAsc = 'hasLazyLoad_ASC',
  HasLazyLoadDesc = 'hasLazyLoad_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type MediaParent = About | Appointment | Contact | Tile | TwoColumnLayout;

export type MediaParentConnectInput = {
  About?: InputMaybe<AboutConnectInput>;
  Appointment?: InputMaybe<AppointmentConnectInput>;
  Contact?: InputMaybe<ContactConnectInput>;
  Tile?: InputMaybe<TileConnectInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutConnectInput>;
};

export type MediaParentCreateInput = {
  About?: InputMaybe<AboutCreateInput>;
  Appointment?: InputMaybe<AppointmentCreateInput>;
  Contact?: InputMaybe<ContactCreateInput>;
  Tile?: InputMaybe<TileCreateInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutCreateInput>;
};

export type MediaParentCreateManyInlineInput = {
  /** Connect multiple existing MediaParent documents */
  connect?: InputMaybe<Array<MediaParentWhereUniqueInput>>;
  /** Create and connect multiple existing MediaParent documents */
  create?: InputMaybe<Array<MediaParentCreateInput>>;
};

export type MediaParentCreateOneInlineInput = {
  /** Connect one existing MediaParent document */
  connect?: InputMaybe<MediaParentWhereUniqueInput>;
  /** Create and connect one MediaParent document */
  create?: InputMaybe<MediaParentCreateInput>;
};

export type MediaParentUpdateInput = {
  About?: InputMaybe<AboutUpdateInput>;
  Appointment?: InputMaybe<AppointmentUpdateInput>;
  Contact?: InputMaybe<ContactUpdateInput>;
  Tile?: InputMaybe<TileUpdateInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateInput>;
};

export type MediaParentUpdateManyInlineInput = {
  /** Connect multiple existing MediaParent documents */
  connect?: InputMaybe<Array<MediaParentConnectInput>>;
  /** Create and connect multiple MediaParent documents */
  create?: InputMaybe<Array<MediaParentCreateInput>>;
  /** Delete multiple MediaParent documents */
  delete?: InputMaybe<Array<MediaParentWhereUniqueInput>>;
  /** Disconnect multiple MediaParent documents */
  disconnect?: InputMaybe<Array<MediaParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MediaParent documents */
  set?: InputMaybe<Array<MediaParentWhereUniqueInput>>;
  /** Update multiple MediaParent documents */
  update?: InputMaybe<Array<MediaParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MediaParent documents */
  upsert?: InputMaybe<Array<MediaParentUpsertWithNestedWhereUniqueInput>>;
};

export type MediaParentUpdateManyWithNestedWhereInput = {
  About?: InputMaybe<AboutUpdateManyWithNestedWhereInput>;
  Appointment?: InputMaybe<AppointmentUpdateManyWithNestedWhereInput>;
  Contact?: InputMaybe<ContactUpdateManyWithNestedWhereInput>;
  Tile?: InputMaybe<TileUpdateManyWithNestedWhereInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateManyWithNestedWhereInput>;
};

export type MediaParentUpdateOneInlineInput = {
  /** Connect existing MediaParent document */
  connect?: InputMaybe<MediaParentWhereUniqueInput>;
  /** Create and connect one MediaParent document */
  create?: InputMaybe<MediaParentCreateInput>;
  /** Delete currently connected MediaParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected MediaParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single MediaParent document */
  update?: InputMaybe<MediaParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MediaParent document */
  upsert?: InputMaybe<MediaParentUpsertWithNestedWhereUniqueInput>;
};

export type MediaParentUpdateWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>;
  Appointment?: InputMaybe<AppointmentUpdateWithNestedWhereUniqueInput>;
  Contact?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>;
  Tile?: InputMaybe<TileUpdateWithNestedWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateWithNestedWhereUniqueInput>;
};

export type MediaParentUpsertWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>;
  Appointment?: InputMaybe<AppointmentUpsertWithNestedWhereUniqueInput>;
  Contact?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>;
  Tile?: InputMaybe<TileUpsertWithNestedWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpsertWithNestedWhereUniqueInput>;
};

export type MediaParentWhereInput = {
  About?: InputMaybe<AboutWhereInput>;
  Appointment?: InputMaybe<AppointmentWhereInput>;
  Contact?: InputMaybe<ContactWhereInput>;
  Tile?: InputMaybe<TileWhereInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutWhereInput>;
};

export type MediaParentWhereUniqueInput = {
  About?: InputMaybe<AboutWhereUniqueInput>;
  Appointment?: InputMaybe<AppointmentWhereUniqueInput>;
  Contact?: InputMaybe<ContactWhereUniqueInput>;
  Tile?: InputMaybe<TileWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutWhereUniqueInput>;
};

export type MediaUpdateInput = {
  hasLazyLoad?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  mobileFallback?: InputMaybe<Scalars['Json']['input']>;
  vimeoEmbed?: InputMaybe<VimeoEmbedUpdateOneInlineInput>;
};

export type MediaUpdateManyInlineInput = {
  /** Create and connect multiple Media component instances */
  create?: InputMaybe<Array<MediaCreateWithPositionInput>>;
  /** Delete multiple Media documents */
  delete?: InputMaybe<Array<MediaWhereUniqueInput>>;
  /** Update multiple Media component instances */
  update?: InputMaybe<Array<MediaUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Media component instances */
  upsert?: InputMaybe<Array<MediaUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type MediaUpdateManyInput = {
  hasLazyLoad?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<Scalars['Json']['input']>;
  mobileFallback?: InputMaybe<Scalars['Json']['input']>;
};

export type MediaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MediaUpdateManyInput;
  /** Document search */
  where: MediaWhereInput;
};

export type MediaUpdateOneInlineInput = {
  /** Create and connect one Media document */
  create?: InputMaybe<MediaCreateInput>;
  /** Delete currently connected Media document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Media document */
  update?: InputMaybe<MediaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Media document */
  upsert?: InputMaybe<MediaUpsertWithNestedWhereUniqueInput>;
};

export type MediaUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MediaUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MediaWhereUniqueInput;
};

export type MediaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MediaUpdateInput;
  /** Unique document search */
  where: MediaWhereUniqueInput;
};

export type MediaUpsertInput = {
  /** Create document if it didn't exist */
  create: MediaCreateInput;
  /** Update document if it exists */
  update: MediaUpdateInput;
};

export type MediaUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MediaUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: MediaWhereUniqueInput;
};

export type MediaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MediaUpsertInput;
  /** Unique document search */
  where: MediaWhereUniqueInput;
};

/** Identifies documents */
export type MediaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MediaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MediaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  hasLazyLoad?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasLazyLoad_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given json path. */
  image_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  image_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  /** All values containing the given json path. */
  mobileFallback_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  mobileFallback_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  vimeoEmbed?: InputMaybe<VimeoEmbedWhereInput>;
};

/** References Media record uniquely */
export type MediaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one about */
  createAbout?: Maybe<About>;
  /** Create one appointment */
  createAppointment?: Maybe<Appointment>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one configuration */
  createConfiguration?: Maybe<Configuration>;
  /** Create one contact */
  createContact?: Maybe<Contact>;
  /** Create one content */
  createContent?: Maybe<Content>;
  /** Create one editorial */
  createEditorial?: Maybe<Editorial>;
  /** Create one landingPage */
  createLandingPage?: Maybe<LandingPage>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one section */
  createSection?: Maybe<Section>;
  /** Delete one about from _all_ existing stages. Returns deleted document. */
  deleteAbout?: Maybe<About>;
  /** Delete one appointment from _all_ existing stages. Returns deleted document. */
  deleteAppointment?: Maybe<Appointment>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one configuration from _all_ existing stages. Returns deleted document. */
  deleteConfiguration?: Maybe<Configuration>;
  /** Delete one contact from _all_ existing stages. Returns deleted document. */
  deleteContact?: Maybe<Contact>;
  /** Delete one content from _all_ existing stages. Returns deleted document. */
  deleteContent?: Maybe<Content>;
  /** Delete one editorial from _all_ existing stages. Returns deleted document. */
  deleteEditorial?: Maybe<Editorial>;
  /** Delete one landingPage from _all_ existing stages. Returns deleted document. */
  deleteLandingPage?: Maybe<LandingPage>;
  /**
   * Delete many About documents
   * @deprecated Please use the new paginated many mutation (deleteManyAboutsConnection)
   */
  deleteManyAbouts: BatchPayload;
  /** Delete many About documents, return deleted documents */
  deleteManyAboutsConnection: AboutConnection;
  /**
   * Delete many Appointment documents
   * @deprecated Please use the new paginated many mutation (deleteManyAppointmentsConnection)
   */
  deleteManyAppointments: BatchPayload;
  /** Delete many Appointment documents, return deleted documents */
  deleteManyAppointmentsConnection: AppointmentConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Configuration documents
   * @deprecated Please use the new paginated many mutation (deleteManyConfigurationsConnection)
   */
  deleteManyConfigurations: BatchPayload;
  /** Delete many Configuration documents, return deleted documents */
  deleteManyConfigurationsConnection: ConfigurationConnection;
  /**
   * Delete many Contact documents
   * @deprecated Please use the new paginated many mutation (deleteManyContactsConnection)
   */
  deleteManyContacts: BatchPayload;
  /** Delete many Contact documents, return deleted documents */
  deleteManyContactsConnection: ContactConnection;
  /**
   * Delete many Content documents
   * @deprecated Please use the new paginated many mutation (deleteManyContentsConnection)
   */
  deleteManyContents: BatchPayload;
  /** Delete many Content documents, return deleted documents */
  deleteManyContentsConnection: ContentConnection;
  /**
   * Delete many Editorial documents
   * @deprecated Please use the new paginated many mutation (deleteManyEditorialsConnection)
   */
  deleteManyEditorials: BatchPayload;
  /** Delete many Editorial documents, return deleted documents */
  deleteManyEditorialsConnection: EditorialConnection;
  /**
   * Delete many LandingPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyLandingPagesConnection)
   */
  deleteManyLandingPages: BatchPayload;
  /** Delete many LandingPage documents, return deleted documents */
  deleteManyLandingPagesConnection: LandingPageConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Section documents
   * @deprecated Please use the new paginated many mutation (deleteManySectionsConnection)
   */
  deleteManySections: BatchPayload;
  /** Delete many Section documents, return deleted documents */
  deleteManySectionsConnection: SectionConnection;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one section from _all_ existing stages. Returns deleted document. */
  deleteSection?: Maybe<Section>;
  /** Publish one about */
  publishAbout?: Maybe<About>;
  /** Publish one appointment */
  publishAppointment?: Maybe<Appointment>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one configuration */
  publishConfiguration?: Maybe<Configuration>;
  /** Publish one contact */
  publishContact?: Maybe<Contact>;
  /** Publish one content */
  publishContent?: Maybe<Content>;
  /** Publish one editorial */
  publishEditorial?: Maybe<Editorial>;
  /** Publish one landingPage */
  publishLandingPage?: Maybe<LandingPage>;
  /**
   * Publish many About documents
   * @deprecated Please use the new paginated many mutation (publishManyAboutsConnection)
   */
  publishManyAbouts: BatchPayload;
  /** Publish many About documents */
  publishManyAboutsConnection: AboutConnection;
  /**
   * Publish many Appointment documents
   * @deprecated Please use the new paginated many mutation (publishManyAppointmentsConnection)
   */
  publishManyAppointments: BatchPayload;
  /** Publish many Appointment documents */
  publishManyAppointmentsConnection: AppointmentConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Configuration documents
   * @deprecated Please use the new paginated many mutation (publishManyConfigurationsConnection)
   */
  publishManyConfigurations: BatchPayload;
  /** Publish many Configuration documents */
  publishManyConfigurationsConnection: ConfigurationConnection;
  /**
   * Publish many Contact documents
   * @deprecated Please use the new paginated many mutation (publishManyContactsConnection)
   */
  publishManyContacts: BatchPayload;
  /** Publish many Contact documents */
  publishManyContactsConnection: ContactConnection;
  /**
   * Publish many Content documents
   * @deprecated Please use the new paginated many mutation (publishManyContentsConnection)
   */
  publishManyContents: BatchPayload;
  /** Publish many Content documents */
  publishManyContentsConnection: ContentConnection;
  /**
   * Publish many Editorial documents
   * @deprecated Please use the new paginated many mutation (publishManyEditorialsConnection)
   */
  publishManyEditorials: BatchPayload;
  /** Publish many Editorial documents */
  publishManyEditorialsConnection: EditorialConnection;
  /**
   * Publish many LandingPage documents
   * @deprecated Please use the new paginated many mutation (publishManyLandingPagesConnection)
   */
  publishManyLandingPages: BatchPayload;
  /** Publish many LandingPage documents */
  publishManyLandingPagesConnection: LandingPageConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Section documents
   * @deprecated Please use the new paginated many mutation (publishManySectionsConnection)
   */
  publishManySections: BatchPayload;
  /** Publish many Section documents */
  publishManySectionsConnection: SectionConnection;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one section */
  publishSection?: Maybe<Section>;
  /** Schedule to publish one about */
  schedulePublishAbout?: Maybe<About>;
  /** Schedule to publish one appointment */
  schedulePublishAppointment?: Maybe<Appointment>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one configuration */
  schedulePublishConfiguration?: Maybe<Configuration>;
  /** Schedule to publish one contact */
  schedulePublishContact?: Maybe<Contact>;
  /** Schedule to publish one content */
  schedulePublishContent?: Maybe<Content>;
  /** Schedule to publish one editorial */
  schedulePublishEditorial?: Maybe<Editorial>;
  /** Schedule to publish one landingPage */
  schedulePublishLandingPage?: Maybe<LandingPage>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one section */
  schedulePublishSection?: Maybe<Section>;
  /** Unpublish one about from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAbout?: Maybe<About>;
  /** Unpublish one appointment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAppointment?: Maybe<Appointment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one configuration from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishConfiguration?: Maybe<Configuration>;
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishContact?: Maybe<Contact>;
  /** Unpublish one content from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishContent?: Maybe<Content>;
  /** Unpublish one editorial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEditorial?: Maybe<Editorial>;
  /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishLandingPage?: Maybe<LandingPage>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSection?: Maybe<Section>;
  /** Unpublish one about from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAbout?: Maybe<About>;
  /** Unpublish one appointment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAppointment?: Maybe<Appointment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one configuration from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishConfiguration?: Maybe<Configuration>;
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContact?: Maybe<Contact>;
  /** Unpublish one content from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContent?: Maybe<Content>;
  /** Unpublish one editorial from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEditorial?: Maybe<Editorial>;
  /** Unpublish one landingPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishLandingPage?: Maybe<LandingPage>;
  /**
   * Unpublish many About documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAboutsConnection)
   */
  unpublishManyAbouts: BatchPayload;
  /** Find many About documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAboutsConnection: AboutConnection;
  /**
   * Unpublish many Appointment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAppointmentsConnection)
   */
  unpublishManyAppointments: BatchPayload;
  /** Find many Appointment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAppointmentsConnection: AppointmentConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Configuration documents
   * @deprecated Please use the new paginated many mutation (unpublishManyConfigurationsConnection)
   */
  unpublishManyConfigurations: BatchPayload;
  /** Find many Configuration documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyConfigurationsConnection: ConfigurationConnection;
  /**
   * Unpublish many Contact documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContactsConnection)
   */
  unpublishManyContacts: BatchPayload;
  /** Find many Contact documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContactsConnection: ContactConnection;
  /**
   * Unpublish many Content documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContentsConnection)
   */
  unpublishManyContents: BatchPayload;
  /** Find many Content documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContentsConnection: ContentConnection;
  /**
   * Unpublish many Editorial documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEditorialsConnection)
   */
  unpublishManyEditorials: BatchPayload;
  /** Find many Editorial documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEditorialsConnection: EditorialConnection;
  /**
   * Unpublish many LandingPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyLandingPagesConnection)
   */
  unpublishManyLandingPages: BatchPayload;
  /** Find many LandingPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyLandingPagesConnection: LandingPageConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Section documents
   * @deprecated Please use the new paginated many mutation (unpublishManySectionsConnection)
   */
  unpublishManySections: BatchPayload;
  /** Find many Section documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySectionsConnection: SectionConnection;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSection?: Maybe<Section>;
  /** Update one about */
  updateAbout?: Maybe<About>;
  /** Update one appointment */
  updateAppointment?: Maybe<Appointment>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one configuration */
  updateConfiguration?: Maybe<Configuration>;
  /** Update one contact */
  updateContact?: Maybe<Contact>;
  /** Update one content */
  updateContent?: Maybe<Content>;
  /** Update one editorial */
  updateEditorial?: Maybe<Editorial>;
  /** Update one landingPage */
  updateLandingPage?: Maybe<LandingPage>;
  /**
   * Update many abouts
   * @deprecated Please use the new paginated many mutation (updateManyAboutsConnection)
   */
  updateManyAbouts: BatchPayload;
  /** Update many About documents */
  updateManyAboutsConnection: AboutConnection;
  /**
   * Update many appointments
   * @deprecated Please use the new paginated many mutation (updateManyAppointmentsConnection)
   */
  updateManyAppointments: BatchPayload;
  /** Update many Appointment documents */
  updateManyAppointmentsConnection: AppointmentConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many configurations
   * @deprecated Please use the new paginated many mutation (updateManyConfigurationsConnection)
   */
  updateManyConfigurations: BatchPayload;
  /** Update many Configuration documents */
  updateManyConfigurationsConnection: ConfigurationConnection;
  /**
   * Update many contacts
   * @deprecated Please use the new paginated many mutation (updateManyContactsConnection)
   */
  updateManyContacts: BatchPayload;
  /** Update many Contact documents */
  updateManyContactsConnection: ContactConnection;
  /**
   * Update many contents
   * @deprecated Please use the new paginated many mutation (updateManyContentsConnection)
   */
  updateManyContents: BatchPayload;
  /** Update many Content documents */
  updateManyContentsConnection: ContentConnection;
  /**
   * Update many editorials
   * @deprecated Please use the new paginated many mutation (updateManyEditorialsConnection)
   */
  updateManyEditorials: BatchPayload;
  /** Update many Editorial documents */
  updateManyEditorialsConnection: EditorialConnection;
  /**
   * Update many landingPages
   * @deprecated Please use the new paginated many mutation (updateManyLandingPagesConnection)
   */
  updateManyLandingPages: BatchPayload;
  /** Update many LandingPage documents */
  updateManyLandingPagesConnection: LandingPageConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many sections
   * @deprecated Please use the new paginated many mutation (updateManySectionsConnection)
   */
  updateManySections: BatchPayload;
  /** Update many Section documents */
  updateManySectionsConnection: SectionConnection;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one section */
  updateSection?: Maybe<Section>;
  /** Upsert one about */
  upsertAbout?: Maybe<About>;
  /** Upsert one appointment */
  upsertAppointment?: Maybe<Appointment>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one configuration */
  upsertConfiguration?: Maybe<Configuration>;
  /** Upsert one contact */
  upsertContact?: Maybe<Contact>;
  /** Upsert one content */
  upsertContent?: Maybe<Content>;
  /** Upsert one editorial */
  upsertEditorial?: Maybe<Editorial>;
  /** Upsert one landingPage */
  upsertLandingPage?: Maybe<LandingPage>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one section */
  upsertSection?: Maybe<Section>;
};


export type MutationCreateAboutArgs = {
  data: AboutCreateInput;
};


export type MutationCreateAppointmentArgs = {
  data: AppointmentCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateConfigurationArgs = {
  data: ConfigurationCreateInput;
};


export type MutationCreateContactArgs = {
  data: ContactCreateInput;
};


export type MutationCreateContentArgs = {
  data: ContentCreateInput;
};


export type MutationCreateEditorialArgs = {
  data: EditorialCreateInput;
};


export type MutationCreateLandingPageArgs = {
  data: LandingPageCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSectionArgs = {
  data: SectionCreateInput;
};


export type MutationDeleteAboutArgs = {
  where: AboutWhereUniqueInput;
};


export type MutationDeleteAppointmentArgs = {
  where: AppointmentWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteConfigurationArgs = {
  where: ConfigurationWhereUniqueInput;
};


export type MutationDeleteContactArgs = {
  where: ContactWhereUniqueInput;
};


export type MutationDeleteContentArgs = {
  where: ContentWhereUniqueInput;
};


export type MutationDeleteEditorialArgs = {
  where: EditorialWhereUniqueInput;
};


export type MutationDeleteLandingPageArgs = {
  where: LandingPageWhereUniqueInput;
};


export type MutationDeleteManyAboutsArgs = {
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationDeleteManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationDeleteManyAppointmentsArgs = {
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationDeleteManyAppointmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyConfigurationsArgs = {
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationDeleteManyConfigurationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationDeleteManyContactsArgs = {
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationDeleteManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationDeleteManyContentsArgs = {
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationDeleteManyContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationDeleteManyEditorialsArgs = {
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationDeleteManyEditorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationDeleteManyLandingPagesArgs = {
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationDeleteManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManySectionsArgs = {
  where?: InputMaybe<SectionManyWhereInput>;
};


export type MutationDeleteManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionManyWhereInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type MutationPublishAboutArgs = {
  to?: Array<Stage>;
  where: AboutWhereUniqueInput;
};


export type MutationPublishAppointmentArgs = {
  to?: Array<Stage>;
  where: AppointmentWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishConfigurationArgs = {
  to?: Array<Stage>;
  where: ConfigurationWhereUniqueInput;
};


export type MutationPublishContactArgs = {
  to?: Array<Stage>;
  where: ContactWhereUniqueInput;
};


export type MutationPublishContentArgs = {
  to?: Array<Stage>;
  where: ContentWhereUniqueInput;
};


export type MutationPublishEditorialArgs = {
  to?: Array<Stage>;
  where: EditorialWhereUniqueInput;
};


export type MutationPublishLandingPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAboutsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationPublishManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationPublishManyAppointmentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationPublishManyAppointmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyConfigurationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationPublishManyConfigurationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationPublishManyContactsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationPublishManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationPublishManyContentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationPublishManyContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationPublishManyEditorialsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationPublishManyEditorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationPublishManyLandingPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<LandingPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<LandingPageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationPublishManySectionsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<SectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishPageArgs = {
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationPublishSectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: SectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishAboutArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AboutWhereUniqueInput;
};


export type MutationSchedulePublishAppointmentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AppointmentWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishConfigurationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ConfigurationWhereUniqueInput;
};


export type MutationSchedulePublishContactArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ContactWhereUniqueInput;
};


export type MutationSchedulePublishContentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: ContentWhereUniqueInput;
};


export type MutationSchedulePublishEditorialArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: EditorialWhereUniqueInput;
};


export type MutationSchedulePublishLandingPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: LandingPageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationSchedulePublishSectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: SectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationScheduleUnpublishAboutArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: AboutWhereUniqueInput;
};


export type MutationScheduleUnpublishAppointmentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: AppointmentWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishConfigurationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ConfigurationWhereUniqueInput;
};


export type MutationScheduleUnpublishContactArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ContactWhereUniqueInput;
};


export type MutationScheduleUnpublishContentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: ContentWhereUniqueInput;
};


export type MutationScheduleUnpublishEditorialArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: EditorialWhereUniqueInput;
};


export type MutationScheduleUnpublishLandingPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: LandingPageWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishSectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: SectionWhereUniqueInput;
};


export type MutationUnpublishAboutArgs = {
  from?: Array<Stage>;
  where: AboutWhereUniqueInput;
};


export type MutationUnpublishAppointmentArgs = {
  from?: Array<Stage>;
  where: AppointmentWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishConfigurationArgs = {
  from?: Array<Stage>;
  where: ConfigurationWhereUniqueInput;
};


export type MutationUnpublishContactArgs = {
  from?: Array<Stage>;
  where: ContactWhereUniqueInput;
};


export type MutationUnpublishContentArgs = {
  from?: Array<Stage>;
  where: ContentWhereUniqueInput;
};


export type MutationUnpublishEditorialArgs = {
  from?: Array<Stage>;
  where: EditorialWhereUniqueInput;
};


export type MutationUnpublishLandingPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: LandingPageWhereUniqueInput;
};


export type MutationUnpublishManyAboutsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUnpublishManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUnpublishManyAppointmentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationUnpublishManyAppointmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyConfigurationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationUnpublishManyConfigurationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationUnpublishManyContactsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationUnpublishManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationUnpublishManyContentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationUnpublishManyContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationUnpublishManyEditorialsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationUnpublishManyEditorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationUnpublishManyLandingPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUnpublishManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManySectionsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SectionManyWhereInput>;
};


export type MutationUnpublishManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SectionManyWhereInput>;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishSectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: SectionWhereUniqueInput;
};


export type MutationUpdateAboutArgs = {
  data: AboutUpdateInput;
  where: AboutWhereUniqueInput;
};


export type MutationUpdateAppointmentArgs = {
  data: AppointmentUpdateInput;
  where: AppointmentWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateConfigurationArgs = {
  data: ConfigurationUpdateInput;
  where: ConfigurationWhereUniqueInput;
};


export type MutationUpdateContactArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};


export type MutationUpdateContentArgs = {
  data: ContentUpdateInput;
  where: ContentWhereUniqueInput;
};


export type MutationUpdateEditorialArgs = {
  data: EditorialUpdateInput;
  where: EditorialWhereUniqueInput;
};


export type MutationUpdateLandingPageArgs = {
  data: LandingPageUpdateInput;
  where: LandingPageWhereUniqueInput;
};


export type MutationUpdateManyAboutsArgs = {
  data: AboutUpdateManyInput;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUpdateManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AboutUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutManyWhereInput>;
};


export type MutationUpdateManyAppointmentsArgs = {
  data: AppointmentUpdateManyInput;
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationUpdateManyAppointmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AppointmentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AppointmentManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyConfigurationsArgs = {
  data: ConfigurationUpdateManyInput;
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationUpdateManyConfigurationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ConfigurationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfigurationManyWhereInput>;
};


export type MutationUpdateManyContactsArgs = {
  data: ContactUpdateManyInput;
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationUpdateManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ContactUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactManyWhereInput>;
};


export type MutationUpdateManyContentsArgs = {
  data: ContentUpdateManyInput;
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationUpdateManyContentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: ContentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentManyWhereInput>;
};


export type MutationUpdateManyEditorialsArgs = {
  data: EditorialUpdateManyInput;
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationUpdateManyEditorialsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: EditorialUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialManyWhereInput>;
};


export type MutationUpdateManyLandingPagesArgs = {
  data: LandingPageUpdateManyInput;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUpdateManyLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: LandingPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManySectionsArgs = {
  data: SectionUpdateManyInput;
  where?: InputMaybe<SectionManyWhereInput>;
};


export type MutationUpdateManySectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: SectionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionManyWhereInput>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpsertAboutArgs = {
  upsert: AboutUpsertInput;
  where: AboutWhereUniqueInput;
};


export type MutationUpsertAppointmentArgs = {
  upsert: AppointmentUpsertInput;
  where: AppointmentWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertConfigurationArgs = {
  upsert: ConfigurationUpsertInput;
  where: ConfigurationWhereUniqueInput;
};


export type MutationUpsertContactArgs = {
  upsert: ContactUpsertInput;
  where: ContactWhereUniqueInput;
};


export type MutationUpsertContentArgs = {
  upsert: ContentUpsertInput;
  where: ContentWhereUniqueInput;
};


export type MutationUpsertEditorialArgs = {
  upsert: EditorialUpsertInput;
  where: EditorialWhereUniqueInput;
};


export type MutationUpsertLandingPageArgs = {
  upsert: LandingPageUpsertInput;
  where: LandingPageWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertSectionArgs = {
  upsert: SectionUpsertInput;
  where: SectionWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Entity & Node & {
  __typename?: 'Page';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  dynamicPageContent: Array<PagedynamicPageContentUnion>;
  /** If true, the page will have padding that separates the page content from the header. Otherwise, the first component will be flush with the header */
  hasPaddingOffset?: Maybe<Scalars['Boolean']['output']>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  seo: PageMetaSeo;
  /** URL friendly Identifier */
  slug?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  /** For reference only; Not displayed on the frontend */
  title?: Maybe<Scalars['String']['output']>;
  transparentBackgroundHeaderColor?: Maybe<Color>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PageDynamicPageContentArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageSeoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dynamicPageContent?: InputMaybe<PagedynamicPageContentUnionCreateManyInlineInput>;
  hasPaddingOffset?: InputMaybe<Scalars['Boolean']['input']>;
  seo: PageMetaSeoCreateOneInlineInput;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transparentBackgroundHeaderColor?: InputMaybe<ColorInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  /** All values in which the union is empty. */
  dynamicPageContent_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  dynamicPageContent_some?: InputMaybe<PagedynamicPageContentUnionWhereInput>;
  hasPaddingOffset?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasPaddingOffset_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export type PageMetaSeo = Entity & {
  __typename?: 'PageMetaSeo';
  /** Concatenate your title to a title template. If true, title is reformatted in the following way — "{title} | No Maintenance". */
  hasTitleTemplate: Scalars['Boolean']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Description in the search results; since Google truncates the snippet after ~155-160 characters, the ideal description length is 55-160 characters  (MAX LENGTH 200). characters. */
  metaDescription: Scalars['String']['output'];
  /** Title in the Search Results. To avoid truncation, ensure that your title does not exceed 43 characters if title has a suffix */
  pageTitle: Scalars['String']['output'];
  /** System stage field */
  stage: Stage;
};

export type PageMetaSeoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageMetaSeoWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageMetaSeoConnection = {
  __typename?: 'PageMetaSeoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageMetaSeoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageMetaSeoCreateInput = {
  hasTitleTemplate: Scalars['Boolean']['input'];
  metaDescription: Scalars['String']['input'];
  pageTitle: Scalars['String']['input'];
};

export type PageMetaSeoCreateManyInlineInput = {
  /** Create and connect multiple existing PageMetaSeo documents */
  create?: InputMaybe<Array<PageMetaSeoCreateInput>>;
};

export type PageMetaSeoCreateOneInlineInput = {
  /** Create and connect one PageMetaSeo document */
  create?: InputMaybe<PageMetaSeoCreateInput>;
};

export type PageMetaSeoCreateWithPositionInput = {
  /** Document to create */
  data: PageMetaSeoCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PageMetaSeoEdge = {
  __typename?: 'PageMetaSeoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PageMetaSeo;
};

/** Identifies documents */
export type PageMetaSeoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageMetaSeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageMetaSeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageMetaSeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  hasTitleTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasTitleTemplate_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PageMetaSeoOrderByInput {
  HasTitleTemplateAsc = 'hasTitleTemplate_ASC',
  HasTitleTemplateDesc = 'hasTitleTemplate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC'
}

export type PageMetaSeoParent = About | Appointment | Contact | Editorial | Page;

export type PageMetaSeoParentConnectInput = {
  About?: InputMaybe<AboutConnectInput>;
  Appointment?: InputMaybe<AppointmentConnectInput>;
  Contact?: InputMaybe<ContactConnectInput>;
  Editorial?: InputMaybe<EditorialConnectInput>;
  Page?: InputMaybe<PageConnectInput>;
};

export type PageMetaSeoParentCreateInput = {
  About?: InputMaybe<AboutCreateInput>;
  Appointment?: InputMaybe<AppointmentCreateInput>;
  Contact?: InputMaybe<ContactCreateInput>;
  Editorial?: InputMaybe<EditorialCreateInput>;
  Page?: InputMaybe<PageCreateInput>;
};

export type PageMetaSeoParentCreateManyInlineInput = {
  /** Connect multiple existing PageMetaSeoParent documents */
  connect?: InputMaybe<Array<PageMetaSeoParentWhereUniqueInput>>;
  /** Create and connect multiple existing PageMetaSeoParent documents */
  create?: InputMaybe<Array<PageMetaSeoParentCreateInput>>;
};

export type PageMetaSeoParentCreateOneInlineInput = {
  /** Connect one existing PageMetaSeoParent document */
  connect?: InputMaybe<PageMetaSeoParentWhereUniqueInput>;
  /** Create and connect one PageMetaSeoParent document */
  create?: InputMaybe<PageMetaSeoParentCreateInput>;
};

export type PageMetaSeoParentUpdateInput = {
  About?: InputMaybe<AboutUpdateInput>;
  Appointment?: InputMaybe<AppointmentUpdateInput>;
  Contact?: InputMaybe<ContactUpdateInput>;
  Editorial?: InputMaybe<EditorialUpdateInput>;
  Page?: InputMaybe<PageUpdateInput>;
};

export type PageMetaSeoParentUpdateManyInlineInput = {
  /** Connect multiple existing PageMetaSeoParent documents */
  connect?: InputMaybe<Array<PageMetaSeoParentConnectInput>>;
  /** Create and connect multiple PageMetaSeoParent documents */
  create?: InputMaybe<Array<PageMetaSeoParentCreateInput>>;
  /** Delete multiple PageMetaSeoParent documents */
  delete?: InputMaybe<Array<PageMetaSeoParentWhereUniqueInput>>;
  /** Disconnect multiple PageMetaSeoParent documents */
  disconnect?: InputMaybe<Array<PageMetaSeoParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageMetaSeoParent documents */
  set?: InputMaybe<Array<PageMetaSeoParentWhereUniqueInput>>;
  /** Update multiple PageMetaSeoParent documents */
  update?: InputMaybe<Array<PageMetaSeoParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageMetaSeoParent documents */
  upsert?: InputMaybe<Array<PageMetaSeoParentUpsertWithNestedWhereUniqueInput>>;
};

export type PageMetaSeoParentUpdateManyWithNestedWhereInput = {
  About?: InputMaybe<AboutUpdateManyWithNestedWhereInput>;
  Appointment?: InputMaybe<AppointmentUpdateManyWithNestedWhereInput>;
  Contact?: InputMaybe<ContactUpdateManyWithNestedWhereInput>;
  Editorial?: InputMaybe<EditorialUpdateManyWithNestedWhereInput>;
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type PageMetaSeoParentUpdateOneInlineInput = {
  /** Connect existing PageMetaSeoParent document */
  connect?: InputMaybe<PageMetaSeoParentWhereUniqueInput>;
  /** Create and connect one PageMetaSeoParent document */
  create?: InputMaybe<PageMetaSeoParentCreateInput>;
  /** Delete currently connected PageMetaSeoParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected PageMetaSeoParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageMetaSeoParent document */
  update?: InputMaybe<PageMetaSeoParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageMetaSeoParent document */
  upsert?: InputMaybe<PageMetaSeoParentUpsertWithNestedWhereUniqueInput>;
};

export type PageMetaSeoParentUpdateWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>;
  Appointment?: InputMaybe<AppointmentUpdateWithNestedWhereUniqueInput>;
  Contact?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>;
  Editorial?: InputMaybe<EditorialUpdateWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type PageMetaSeoParentUpsertWithNestedWhereUniqueInput = {
  About?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>;
  Appointment?: InputMaybe<AppointmentUpsertWithNestedWhereUniqueInput>;
  Contact?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>;
  Editorial?: InputMaybe<EditorialUpsertWithNestedWhereUniqueInput>;
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageMetaSeoParentWhereInput = {
  About?: InputMaybe<AboutWhereInput>;
  Appointment?: InputMaybe<AppointmentWhereInput>;
  Contact?: InputMaybe<ContactWhereInput>;
  Editorial?: InputMaybe<EditorialWhereInput>;
  Page?: InputMaybe<PageWhereInput>;
};

export type PageMetaSeoParentWhereUniqueInput = {
  About?: InputMaybe<AboutWhereUniqueInput>;
  Appointment?: InputMaybe<AppointmentWhereUniqueInput>;
  Contact?: InputMaybe<ContactWhereUniqueInput>;
  Editorial?: InputMaybe<EditorialWhereUniqueInput>;
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type PageMetaSeoUpdateInput = {
  hasTitleTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageMetaSeoUpdateManyInlineInput = {
  /** Create and connect multiple PageMetaSeo component instances */
  create?: InputMaybe<Array<PageMetaSeoCreateWithPositionInput>>;
  /** Delete multiple PageMetaSeo documents */
  delete?: InputMaybe<Array<PageMetaSeoWhereUniqueInput>>;
  /** Update multiple PageMetaSeo component instances */
  update?: InputMaybe<Array<PageMetaSeoUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PageMetaSeo component instances */
  upsert?: InputMaybe<Array<PageMetaSeoUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PageMetaSeoUpdateManyInput = {
  hasTitleTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
};

export type PageMetaSeoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageMetaSeoUpdateManyInput;
  /** Document search */
  where: PageMetaSeoWhereInput;
};

export type PageMetaSeoUpdateOneInlineInput = {
  /** Create and connect one PageMetaSeo document */
  create?: InputMaybe<PageMetaSeoCreateInput>;
  /** Delete currently connected PageMetaSeo document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PageMetaSeo document */
  update?: InputMaybe<PageMetaSeoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageMetaSeo document */
  upsert?: InputMaybe<PageMetaSeoUpsertWithNestedWhereUniqueInput>;
};

export type PageMetaSeoUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PageMetaSeoUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageMetaSeoWhereUniqueInput;
};

export type PageMetaSeoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageMetaSeoUpdateInput;
  /** Unique document search */
  where: PageMetaSeoWhereUniqueInput;
};

export type PageMetaSeoUpsertInput = {
  /** Create document if it didn't exist */
  create: PageMetaSeoCreateInput;
  /** Update document if it exists */
  update: PageMetaSeoUpdateInput;
};

export type PageMetaSeoUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PageMetaSeoUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PageMetaSeoWhereUniqueInput;
};

export type PageMetaSeoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageMetaSeoUpsertInput;
  /** Unique document search */
  where: PageMetaSeoWhereUniqueInput;
};

/** Identifies documents */
export type PageMetaSeoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageMetaSeoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageMetaSeoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageMetaSeoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  hasTitleTemplate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasTitleTemplate_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pageTitle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pageTitle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pageTitle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pageTitle_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** References PageMetaSeo record uniquely */
export type PageMetaSeoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HasPaddingOffsetAsc = 'hasPaddingOffset_ASC',
  HasPaddingOffsetDesc = 'hasPaddingOffset_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
  dynamicPageContent?: InputMaybe<PagedynamicPageContentUnionUpdateManyInlineInput>;
  hasPaddingOffset?: InputMaybe<Scalars['Boolean']['input']>;
  seo?: InputMaybe<PageMetaSeoUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transparentBackgroundHeaderColor?: InputMaybe<ColorInput>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  hasPaddingOffset?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transparentBackgroundHeaderColor?: InputMaybe<ColorInput>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PageWhereStageInput>;
  documentInStages_none?: InputMaybe<PageWhereStageInput>;
  documentInStages_some?: InputMaybe<PageWhereStageInput>;
  /** All values in which the union is empty. */
  dynamicPageContent_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  dynamicPageContent_some?: InputMaybe<PagedynamicPageContentUnionWhereInput>;
  hasPaddingOffset?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasPaddingOffset_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  seo?: InputMaybe<PageMetaSeoWhereInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PagedynamicPageContentUnion = ContentTile | CustomWidget | FeaturedCollection | Form | TwoColumnLayout;

export type PagedynamicPageContentUnionConnectInput = {
  ContentTile?: InputMaybe<ContentTileConnectInput>;
  CustomWidget?: InputMaybe<CustomWidgetConnectInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionConnectInput>;
  Form?: InputMaybe<FormConnectInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutConnectInput>;
};

export type PagedynamicPageContentUnionCreateInput = {
  ContentTile?: InputMaybe<ContentTileCreateInput>;
  CustomWidget?: InputMaybe<CustomWidgetCreateInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionCreateInput>;
  Form?: InputMaybe<FormCreateInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutCreateInput>;
};

export type PagedynamicPageContentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PagedynamicPageContentUnion documents */
  create?: InputMaybe<Array<PagedynamicPageContentUnionCreateInput>>;
};

export type PagedynamicPageContentUnionCreateOneInlineInput = {
  /** Create and connect one PagedynamicPageContentUnion document */
  create?: InputMaybe<PagedynamicPageContentUnionCreateInput>;
};

export type PagedynamicPageContentUnionCreateWithPositionInput = {
  ContentTile?: InputMaybe<ContentTileCreateWithPositionInput>;
  CustomWidget?: InputMaybe<CustomWidgetCreateWithPositionInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionCreateWithPositionInput>;
  Form?: InputMaybe<FormCreateWithPositionInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutCreateWithPositionInput>;
};

export type PagedynamicPageContentUnionUpdateInput = {
  ContentTile?: InputMaybe<ContentTileUpdateInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateInput>;
  Form?: InputMaybe<FormUpdateInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateInput>;
};

export type PagedynamicPageContentUnionUpdateManyInlineInput = {
  /** Create and connect multiple PagedynamicPageContentUnion component instances */
  create?: InputMaybe<Array<PagedynamicPageContentUnionCreateWithPositionInput>>;
  /** Delete multiple PagedynamicPageContentUnion documents */
  delete?: InputMaybe<Array<PagedynamicPageContentUnionWhereUniqueInput>>;
  /** Update multiple PagedynamicPageContentUnion component instances */
  update?: InputMaybe<Array<PagedynamicPageContentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PagedynamicPageContentUnion component instances */
  upsert?: InputMaybe<Array<PagedynamicPageContentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PagedynamicPageContentUnionUpdateManyWithNestedWhereInput = {
  ContentTile?: InputMaybe<ContentTileUpdateManyWithNestedWhereInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateManyWithNestedWhereInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateManyWithNestedWhereInput>;
  Form?: InputMaybe<FormUpdateManyWithNestedWhereInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateManyWithNestedWhereInput>;
};

export type PagedynamicPageContentUnionUpdateOneInlineInput = {
  /** Create and connect one PagedynamicPageContentUnion document */
  create?: InputMaybe<PagedynamicPageContentUnionCreateInput>;
  /** Delete currently connected PagedynamicPageContentUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single PagedynamicPageContentUnion document */
  update?: InputMaybe<PagedynamicPageContentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PagedynamicPageContentUnion document */
  upsert?: InputMaybe<PagedynamicPageContentUnionUpsertWithNestedWhereUniqueInput>;
};

export type PagedynamicPageContentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  ContentTile?: InputMaybe<ContentTileUpdateWithNestedWhereUniqueAndPositionInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateWithNestedWhereUniqueAndPositionInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateWithNestedWhereUniqueAndPositionInput>;
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueAndPositionInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PagedynamicPageContentUnionUpdateWithNestedWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileUpdateWithNestedWhereUniqueInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpdateWithNestedWhereUniqueInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpdateWithNestedWhereUniqueInput>;
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpdateWithNestedWhereUniqueInput>;
};

export type PagedynamicPageContentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  ContentTile?: InputMaybe<ContentTileUpsertWithNestedWhereUniqueAndPositionInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpsertWithNestedWhereUniqueAndPositionInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpsertWithNestedWhereUniqueAndPositionInput>;
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueAndPositionInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PagedynamicPageContentUnionUpsertWithNestedWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileUpsertWithNestedWhereUniqueInput>;
  CustomWidget?: InputMaybe<CustomWidgetUpsertWithNestedWhereUniqueInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionUpsertWithNestedWhereUniqueInput>;
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutUpsertWithNestedWhereUniqueInput>;
};

export type PagedynamicPageContentUnionWhereInput = {
  ContentTile?: InputMaybe<ContentTileWhereInput>;
  CustomWidget?: InputMaybe<CustomWidgetWhereInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionWhereInput>;
  Form?: InputMaybe<FormWhereInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutWhereInput>;
};

export type PagedynamicPageContentUnionWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileWhereUniqueInput>;
  CustomWidget?: InputMaybe<CustomWidgetWhereUniqueInput>;
  FeaturedCollection?: InputMaybe<FeaturedCollectionWhereUniqueInput>;
  Form?: InputMaybe<FormWhereUniqueInput>;
  TwoColumnLayout?: InputMaybe<TwoColumnLayoutWhereUniqueInput>;
};

export enum Path {
  Editorials = 'editorials',
  None = 'none',
  Pages = 'pages'
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single about */
  about?: Maybe<About>;
  /** Retrieve document version */
  aboutVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple abouts */
  abouts: Array<About>;
  /** Retrieve multiple abouts using the Relay connection interface */
  aboutsConnection: AboutConnection;
  /** Retrieve a single appointment */
  appointment?: Maybe<Appointment>;
  /** Retrieve document version */
  appointmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple appointments */
  appointments: Array<Appointment>;
  /** Retrieve multiple appointments using the Relay connection interface */
  appointmentsConnection: AppointmentConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single configuration */
  configuration?: Maybe<Configuration>;
  /** Retrieve document version */
  configurationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple configurations */
  configurations: Array<Configuration>;
  /** Retrieve multiple configurations using the Relay connection interface */
  configurationsConnection: ConfigurationConnection;
  /** Retrieve a single contact */
  contact?: Maybe<Contact>;
  /** Retrieve document version */
  contactVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple contacts */
  contacts: Array<Contact>;
  /** Retrieve multiple contacts using the Relay connection interface */
  contactsConnection: ContactConnection;
  /** Retrieve a single content */
  content?: Maybe<Content>;
  /** Retrieve document version */
  contentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple contents */
  contents: Array<Content>;
  /** Retrieve multiple contents using the Relay connection interface */
  contentsConnection: ContentConnection;
  /** Retrieve a single editorial */
  editorial?: Maybe<Editorial>;
  /** Retrieve document version */
  editorialVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple editorials */
  editorials: Array<Editorial>;
  /** Retrieve multiple editorials using the Relay connection interface */
  editorialsConnection: EditorialConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single landingPage */
  landingPage?: Maybe<LandingPage>;
  /** Retrieve document version */
  landingPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple landingPages */
  landingPages: Array<LandingPage>;
  /** Retrieve multiple landingPages using the Relay connection interface */
  landingPagesConnection: LandingPageConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single section */
  section?: Maybe<Section>;
  /** Retrieve document version */
  sectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple sections */
  sections: Array<Section>;
  /** Retrieve multiple sections using the Relay connection interface */
  sectionsConnection: SectionConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAboutArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AboutWhereUniqueInput;
};


export type QueryAboutVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAboutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AboutWhereInput>;
};


export type QueryAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AboutWhereInput>;
};


export type QueryAppointmentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AppointmentWhereUniqueInput;
};


export type QueryAppointmentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAppointmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AppointmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AppointmentWhereInput>;
};


export type QueryAppointmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AppointmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AppointmentWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryConfigurationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ConfigurationWhereUniqueInput;
};


export type QueryConfigurationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryConfigurationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConfigurationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ConfigurationWhereInput>;
};


export type QueryConfigurationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ConfigurationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ConfigurationWhereInput>;
};


export type QueryContactArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ContactWhereUniqueInput;
};


export type QueryContactVersionArgs = {
  where: VersionWhereInput;
};


export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContactOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryContactsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContactOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ContactWhereInput>;
};


export type QueryContentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ContentWhereUniqueInput;
};


export type QueryContentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryContentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryEditorialArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EditorialWhereUniqueInput;
};


export type QueryEditorialVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEditorialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EditorialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EditorialWhereInput>;
};


export type QueryEditorialsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EditorialOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<EditorialWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryLandingPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: LandingPageWhereUniqueInput;
};


export type QueryLandingPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryLandingPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryLandingPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySectionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SectionWhereUniqueInput;
};


export type QuerySectionVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SectionWhereInput>;
};


export type QuerySectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = About | Appointment | Asset | Configuration | Contact | Content | Editorial | LandingPage | Page | Section;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Section = Entity & Node & {
  __typename?: 'Section';
  /** Inherits the page's color if this value is left blank. */
  backgroundColor?: Maybe<Color>;
  containerWidth?: Maybe<ContainerWidth>;
  contents: Array<Content>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Section>;
  /** List of Section versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  internalName?: Maybe<Scalars['String']['output']>;
  /** Inherits the page's color if this value is left blank. */
  primaryColor?: Maybe<Color>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  type?: Maybe<SectiontypeUnion>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SectionContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type SectionCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SectionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type SectionHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type SectionPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SectionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SectionTypeArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SectionUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type SectionConnection = {
  __typename?: 'SectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SectionCreateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  containerWidth?: InputMaybe<ContainerWidth>;
  contents?: InputMaybe<ContentCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SectionCreateLocalizationsInput>;
  primaryColor?: InputMaybe<ColorInput>;
  type?: InputMaybe<SectiontypeUnionCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SectionCreateLocalizationInput = {
  /** Localization input */
  data: SectionCreateLocalizationDataInput;
  locale: Locale;
};

export type SectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SectionCreateLocalizationInput>>;
};

export type SectionCreateManyInlineInput = {
  /** Connect multiple existing Section documents */
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  /** Create and connect multiple existing Section documents */
  create?: InputMaybe<Array<SectionCreateInput>>;
};

export type SectionCreateOneInlineInput = {
  /** Connect one existing Section document */
  connect?: InputMaybe<SectionWhereUniqueInput>;
  /** Create and connect one Section document */
  create?: InputMaybe<SectionCreateInput>;
};

/** An edge in a connection. */
export type SectionEdge = {
  __typename?: 'SectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Section;
};

/** Identifies documents */
export type SectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  containerWidth?: InputMaybe<ContainerWidth>;
  /** All values that are contained in given list. */
  containerWidth_in?: InputMaybe<Array<InputMaybe<ContainerWidth>>>;
  /** Any other value that exists and is not equal to the given value. */
  containerWidth_not?: InputMaybe<ContainerWidth>;
  /** All values that are not contained in given list. */
  containerWidth_not_in?: InputMaybe<Array<InputMaybe<ContainerWidth>>>;
  contents_every?: InputMaybe<ContentWhereInput>;
  contents_none?: InputMaybe<ContentWhereInput>;
  contents_some?: InputMaybe<ContentWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SectionWhereStageInput>;
  documentInStages_none?: InputMaybe<SectionWhereStageInput>;
  documentInStages_some?: InputMaybe<SectionWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  internalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  internalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  internalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  internalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the modular component is connected to the given models */
  type?: InputMaybe<SectiontypeUnionWhereInput>;
  /** All values in which the union is empty. */
  type_empty?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SectionOrderByInput {
  ContainerWidthAsc = 'containerWidth_ASC',
  ContainerWidthDesc = 'containerWidth_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SectionUpdateInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  containerWidth?: InputMaybe<ContainerWidth>;
  contents?: InputMaybe<ContentUpdateManyInlineInput>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** Manage document localizations */
  localizations?: InputMaybe<SectionUpdateLocalizationsInput>;
  primaryColor?: InputMaybe<ColorInput>;
  type?: InputMaybe<SectiontypeUnionUpdateOneInlineInput>;
};

export type SectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type SectionUpdateManyInlineInput = {
  /** Connect multiple existing Section documents */
  connect?: InputMaybe<Array<SectionConnectInput>>;
  /** Create and connect multiple Section documents */
  create?: InputMaybe<Array<SectionCreateInput>>;
  /** Delete multiple Section documents */
  delete?: InputMaybe<Array<SectionWhereUniqueInput>>;
  /** Disconnect multiple Section documents */
  disconnect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Section documents */
  set?: InputMaybe<Array<SectionWhereUniqueInput>>;
  /** Update multiple Section documents */
  update?: InputMaybe<Array<SectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Section documents */
  upsert?: InputMaybe<Array<SectionUpsertWithNestedWhereUniqueInput>>;
};

export type SectionUpdateManyInput = {
  backgroundColor?: InputMaybe<ColorInput>;
  containerWidth?: InputMaybe<ContainerWidth>;
  primaryColor?: InputMaybe<ColorInput>;
};

export type SectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SectionUpdateManyInput;
  /** Document search */
  where: SectionWhereInput;
};

export type SectionUpdateOneInlineInput = {
  /** Connect existing Section document */
  connect?: InputMaybe<SectionWhereUniqueInput>;
  /** Create and connect one Section document */
  create?: InputMaybe<SectionCreateInput>;
  /** Delete currently connected Section document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Section document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Section document */
  update?: InputMaybe<SectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Section document */
  upsert?: InputMaybe<SectionUpsertWithNestedWhereUniqueInput>;
};

export type SectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SectionUpdateInput;
  /** Unique document search */
  where: SectionWhereUniqueInput;
};

export type SectionUpsertInput = {
  /** Create document if it didn't exist */
  create: SectionCreateInput;
  /** Update document if it exists */
  update: SectionUpdateInput;
};

export type SectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SectionUpsertInput;
  /** Unique document search */
  where: SectionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SectionWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type SectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  containerWidth?: InputMaybe<ContainerWidth>;
  /** All values that are contained in given list. */
  containerWidth_in?: InputMaybe<Array<InputMaybe<ContainerWidth>>>;
  /** Any other value that exists and is not equal to the given value. */
  containerWidth_not?: InputMaybe<ContainerWidth>;
  /** All values that are not contained in given list. */
  containerWidth_not_in?: InputMaybe<Array<InputMaybe<ContainerWidth>>>;
  contents_every?: InputMaybe<ContentWhereInput>;
  contents_none?: InputMaybe<ContentWhereInput>;
  contents_some?: InputMaybe<ContentWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SectionWhereStageInput>;
  documentInStages_none?: InputMaybe<SectionWhereStageInput>;
  documentInStages_some?: InputMaybe<SectionWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  internalName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  internalName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  internalName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  internalName_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the modular component is connected to the given models */
  type?: InputMaybe<SectiontypeUnionWhereInput>;
  /** All values in which the union is empty. */
  type_empty?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SectionWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SectionWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SectionWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SectionWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SectionWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Section record uniquely */
export type SectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
};

export type SectiontypeUnion = Collection;

export type SectiontypeUnionConnectInput = {
  Collection?: InputMaybe<CollectionConnectInput>;
};

export type SectiontypeUnionCreateInput = {
  Collection?: InputMaybe<CollectionCreateInput>;
};

export type SectiontypeUnionCreateManyInlineInput = {
  /** Create and connect multiple existing SectiontypeUnion documents */
  create?: InputMaybe<Array<SectiontypeUnionCreateInput>>;
};

export type SectiontypeUnionCreateOneInlineInput = {
  /** Create and connect one SectiontypeUnion document */
  create?: InputMaybe<SectiontypeUnionCreateInput>;
};

export type SectiontypeUnionCreateWithPositionInput = {
  Collection?: InputMaybe<CollectionCreateWithPositionInput>;
};

export type SectiontypeUnionUpdateInput = {
  Collection?: InputMaybe<CollectionUpdateInput>;
};

export type SectiontypeUnionUpdateManyInlineInput = {
  /** Create and connect multiple SectiontypeUnion component instances */
  create?: InputMaybe<Array<SectiontypeUnionCreateWithPositionInput>>;
  /** Delete multiple SectiontypeUnion documents */
  delete?: InputMaybe<Array<SectiontypeUnionWhereUniqueInput>>;
  /** Update multiple SectiontypeUnion component instances */
  update?: InputMaybe<Array<SectiontypeUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple SectiontypeUnion component instances */
  upsert?: InputMaybe<Array<SectiontypeUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type SectiontypeUnionUpdateManyWithNestedWhereInput = {
  Collection?: InputMaybe<CollectionUpdateManyWithNestedWhereInput>;
};

export type SectiontypeUnionUpdateOneInlineInput = {
  /** Create and connect one SectiontypeUnion document */
  create?: InputMaybe<SectiontypeUnionCreateInput>;
  /** Delete currently connected SectiontypeUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single SectiontypeUnion document */
  update?: InputMaybe<SectiontypeUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SectiontypeUnion document */
  upsert?: InputMaybe<SectiontypeUnionUpsertWithNestedWhereUniqueInput>;
};

export type SectiontypeUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Collection?: InputMaybe<CollectionUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type SectiontypeUnionUpdateWithNestedWhereUniqueInput = {
  Collection?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
};

export type SectiontypeUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Collection?: InputMaybe<CollectionUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type SectiontypeUnionUpsertWithNestedWhereUniqueInput = {
  Collection?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type SectiontypeUnionWhereInput = {
  Collection?: InputMaybe<CollectionWhereInput>;
};

export type SectiontypeUnionWhereUniqueInput = {
  Collection?: InputMaybe<CollectionWhereUniqueInput>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Tile = Entity & {
  __typename?: 'Tile';
  backgroundMedia?: Maybe<Media>;
  /** If true, there's a translucent black overlay over the element on hover */
  hasOverlayOnHover?: Maybe<Scalars['Boolean']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  link?: Maybe<Link>;
  /** System stage field */
  stage: Stage;
  subheading?: Maybe<Scalars['String']['output']>;
  /** Overrides the text Color defined in the Component's general config */
  textColor?: Maybe<Color>;
  textPosition?: Maybe<ContentTileTextPosition>;
};


export type TileBackgroundMediaArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TileLinkArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TileConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TileWhereUniqueInput;
};

/** A connection to a list of items. */
export type TileConnection = {
  __typename?: 'TileConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TileEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TileCreateInput = {
  backgroundMedia?: InputMaybe<MediaCreateOneInlineInput>;
  hasOverlayOnHover?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<LinkCreateOneInlineInput>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<ColorInput>;
  textPosition?: InputMaybe<ContentTileTextPosition>;
};

export type TileCreateManyInlineInput = {
  /** Create and connect multiple existing Tile documents */
  create?: InputMaybe<Array<TileCreateInput>>;
};

export type TileCreateOneInlineInput = {
  /** Create and connect one Tile document */
  create?: InputMaybe<TileCreateInput>;
};

export type TileCreateWithPositionInput = {
  /** Document to create */
  data: TileCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TileEdge = {
  __typename?: 'TileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Tile;
};

/** Identifies documents */
export type TileManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundMedia?: InputMaybe<MediaWhereInput>;
  hasOverlayOnHover?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasOverlayOnHover_not?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<LinkWhereInput>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subheading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subheading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subheading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subheading_starts_with?: InputMaybe<Scalars['String']['input']>;
  textPosition?: InputMaybe<ContentTileTextPosition>;
  /** All values that are contained in given list. */
  textPosition_in?: InputMaybe<Array<InputMaybe<ContentTileTextPosition>>>;
  /** Any other value that exists and is not equal to the given value. */
  textPosition_not?: InputMaybe<ContentTileTextPosition>;
  /** All values that are not contained in given list. */
  textPosition_not_in?: InputMaybe<Array<InputMaybe<ContentTileTextPosition>>>;
};

export enum TileOrderByInput {
  HasOverlayOnHoverAsc = 'hasOverlayOnHover_ASC',
  HasOverlayOnHoverDesc = 'hasOverlayOnHover_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  TextPositionAsc = 'textPosition_ASC',
  TextPositionDesc = 'textPosition_DESC'
}

export type TileParent = ContentTile;

export type TileParentConnectInput = {
  ContentTile?: InputMaybe<ContentTileConnectInput>;
};

export type TileParentCreateInput = {
  ContentTile?: InputMaybe<ContentTileCreateInput>;
};

export type TileParentCreateManyInlineInput = {
  /** Create and connect multiple existing TileParent documents */
  create?: InputMaybe<Array<TileParentCreateInput>>;
};

export type TileParentCreateOneInlineInput = {
  /** Create and connect one TileParent document */
  create?: InputMaybe<TileParentCreateInput>;
};

export type TileParentCreateWithPositionInput = {
  ContentTile?: InputMaybe<ContentTileCreateWithPositionInput>;
};

export type TileParentUpdateInput = {
  ContentTile?: InputMaybe<ContentTileUpdateInput>;
};

export type TileParentUpdateManyInlineInput = {
  /** Create and connect multiple TileParent component instances */
  create?: InputMaybe<Array<TileParentCreateWithPositionInput>>;
  /** Delete multiple TileParent documents */
  delete?: InputMaybe<Array<TileParentWhereUniqueInput>>;
  /** Update multiple TileParent component instances */
  update?: InputMaybe<Array<TileParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TileParent component instances */
  upsert?: InputMaybe<Array<TileParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TileParentUpdateManyWithNestedWhereInput = {
  ContentTile?: InputMaybe<ContentTileUpdateManyWithNestedWhereInput>;
};

export type TileParentUpdateOneInlineInput = {
  /** Create and connect one TileParent document */
  create?: InputMaybe<TileParentCreateInput>;
  /** Delete currently connected TileParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TileParent document */
  update?: InputMaybe<TileParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TileParent document */
  upsert?: InputMaybe<TileParentUpsertWithNestedWhereUniqueInput>;
};

export type TileParentUpdateWithNestedWhereUniqueAndPositionInput = {
  ContentTile?: InputMaybe<ContentTileUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TileParentUpdateWithNestedWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileUpdateWithNestedWhereUniqueInput>;
};

export type TileParentUpsertWithNestedWhereUniqueAndPositionInput = {
  ContentTile?: InputMaybe<ContentTileUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TileParentUpsertWithNestedWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileUpsertWithNestedWhereUniqueInput>;
};

export type TileParentWhereInput = {
  ContentTile?: InputMaybe<ContentTileWhereInput>;
};

export type TileParentWhereUniqueInput = {
  ContentTile?: InputMaybe<ContentTileWhereUniqueInput>;
};

export type TileUpdateInput = {
  backgroundMedia?: InputMaybe<MediaUpdateOneInlineInput>;
  hasOverlayOnHover?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<LinkUpdateOneInlineInput>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<ColorInput>;
  textPosition?: InputMaybe<ContentTileTextPosition>;
};

export type TileUpdateManyInlineInput = {
  /** Create and connect multiple Tile component instances */
  create?: InputMaybe<Array<TileCreateWithPositionInput>>;
  /** Delete multiple Tile documents */
  delete?: InputMaybe<Array<TileWhereUniqueInput>>;
  /** Update multiple Tile component instances */
  update?: InputMaybe<Array<TileUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Tile component instances */
  upsert?: InputMaybe<Array<TileUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TileUpdateManyInput = {
  hasOverlayOnHover?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<ColorInput>;
  textPosition?: InputMaybe<ContentTileTextPosition>;
};

export type TileUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TileUpdateManyInput;
  /** Document search */
  where: TileWhereInput;
};

export type TileUpdateOneInlineInput = {
  /** Create and connect one Tile document */
  create?: InputMaybe<TileCreateInput>;
  /** Delete currently connected Tile document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Tile document */
  update?: InputMaybe<TileUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Tile document */
  upsert?: InputMaybe<TileUpsertWithNestedWhereUniqueInput>;
};

export type TileUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TileUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TileWhereUniqueInput;
};

export type TileUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TileUpdateInput;
  /** Unique document search */
  where: TileWhereUniqueInput;
};

export type TileUpsertInput = {
  /** Create document if it didn't exist */
  create: TileCreateInput;
  /** Update document if it exists */
  update: TileUpdateInput;
};

export type TileUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TileUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TileWhereUniqueInput;
};

export type TileUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TileUpsertInput;
  /** Unique document search */
  where: TileWhereUniqueInput;
};

/** Identifies documents */
export type TileWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TileWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TileWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TileWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  backgroundMedia?: InputMaybe<MediaWhereInput>;
  hasOverlayOnHover?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasOverlayOnHover_not?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<LinkWhereInput>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  subheading_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  subheading_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  subheading_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  subheading_starts_with?: InputMaybe<Scalars['String']['input']>;
  textPosition?: InputMaybe<ContentTileTextPosition>;
  /** All values that are contained in given list. */
  textPosition_in?: InputMaybe<Array<InputMaybe<ContentTileTextPosition>>>;
  /** Any other value that exists and is not equal to the given value. */
  textPosition_not?: InputMaybe<ContentTileTextPosition>;
  /** All values that are not contained in given list. */
  textPosition_not_in?: InputMaybe<Array<InputMaybe<ContentTileTextPosition>>>;
};

/** References Tile record uniquely */
export type TileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TwoColumnLayout = Entity & {
  __typename?: 'TwoColumnLayout';
  column1?: Maybe<TwoColumnLayoutcolumn1Union>;
  column2?: Maybe<TwoColumnLayoutcolumn2Union>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** If true, column 1 will load above column 2 on mobile. Otherwise, column 2 will load first. */
  isColumn1Loading1stOnMobile?: Maybe<Scalars['Boolean']['output']>;
  /** System stage field */
  stage: Stage;
};


export type TwoColumnLayoutColumn1Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TwoColumnLayoutColumn2Args = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TwoColumnLayoutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TwoColumnLayoutWhereUniqueInput;
};

/** A connection to a list of items. */
export type TwoColumnLayoutConnection = {
  __typename?: 'TwoColumnLayoutConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TwoColumnLayoutEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TwoColumnLayoutCreateInput = {
  column1?: InputMaybe<TwoColumnLayoutcolumn1UnionCreateOneInlineInput>;
  column2?: InputMaybe<TwoColumnLayoutcolumn2UnionCreateOneInlineInput>;
  isColumn1Loading1stOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TwoColumnLayoutCreateManyInlineInput = {
  /** Create and connect multiple existing TwoColumnLayout documents */
  create?: InputMaybe<Array<TwoColumnLayoutCreateInput>>;
};

export type TwoColumnLayoutCreateOneInlineInput = {
  /** Create and connect one TwoColumnLayout document */
  create?: InputMaybe<TwoColumnLayoutCreateInput>;
};

export type TwoColumnLayoutCreateWithPositionInput = {
  /** Document to create */
  data: TwoColumnLayoutCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TwoColumnLayoutEdge = {
  __typename?: 'TwoColumnLayoutEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TwoColumnLayout;
};

/** Identifies documents */
export type TwoColumnLayoutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwoColumnLayoutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwoColumnLayoutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwoColumnLayoutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the modular component is connected to the given models */
  column1?: InputMaybe<TwoColumnLayoutcolumn1UnionWhereInput>;
  /** All values in which the union is empty. */
  column1_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values in which the modular component is connected to the given models */
  column2?: InputMaybe<TwoColumnLayoutcolumn2UnionWhereInput>;
  /** All values in which the union is empty. */
  column2_empty?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isColumn1Loading1stOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isColumn1Loading1stOnMobile_not?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TwoColumnLayoutOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsColumn1Loading1stOnMobileAsc = 'isColumn1Loading1stOnMobile_ASC',
  IsColumn1Loading1stOnMobileDesc = 'isColumn1Loading1stOnMobile_DESC'
}

export type TwoColumnLayoutParent = Page;

export type TwoColumnLayoutParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>;
};

export type TwoColumnLayoutParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>;
};

export type TwoColumnLayoutParentCreateManyInlineInput = {
  /** Connect multiple existing TwoColumnLayoutParent documents */
  connect?: InputMaybe<Array<TwoColumnLayoutParentWhereUniqueInput>>;
  /** Create and connect multiple existing TwoColumnLayoutParent documents */
  create?: InputMaybe<Array<TwoColumnLayoutParentCreateInput>>;
};

export type TwoColumnLayoutParentCreateOneInlineInput = {
  /** Connect one existing TwoColumnLayoutParent document */
  connect?: InputMaybe<TwoColumnLayoutParentWhereUniqueInput>;
  /** Create and connect one TwoColumnLayoutParent document */
  create?: InputMaybe<TwoColumnLayoutParentCreateInput>;
};

export type TwoColumnLayoutParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>;
};

export type TwoColumnLayoutParentUpdateManyInlineInput = {
  /** Connect multiple existing TwoColumnLayoutParent documents */
  connect?: InputMaybe<Array<TwoColumnLayoutParentConnectInput>>;
  /** Create and connect multiple TwoColumnLayoutParent documents */
  create?: InputMaybe<Array<TwoColumnLayoutParentCreateInput>>;
  /** Delete multiple TwoColumnLayoutParent documents */
  delete?: InputMaybe<Array<TwoColumnLayoutParentWhereUniqueInput>>;
  /** Disconnect multiple TwoColumnLayoutParent documents */
  disconnect?: InputMaybe<Array<TwoColumnLayoutParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TwoColumnLayoutParent documents */
  set?: InputMaybe<Array<TwoColumnLayoutParentWhereUniqueInput>>;
  /** Update multiple TwoColumnLayoutParent documents */
  update?: InputMaybe<Array<TwoColumnLayoutParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TwoColumnLayoutParent documents */
  upsert?: InputMaybe<Array<TwoColumnLayoutParentUpsertWithNestedWhereUniqueInput>>;
};

export type TwoColumnLayoutParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type TwoColumnLayoutParentUpdateOneInlineInput = {
  /** Connect existing TwoColumnLayoutParent document */
  connect?: InputMaybe<TwoColumnLayoutParentWhereUniqueInput>;
  /** Create and connect one TwoColumnLayoutParent document */
  create?: InputMaybe<TwoColumnLayoutParentCreateInput>;
  /** Delete currently connected TwoColumnLayoutParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TwoColumnLayoutParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumnLayoutParent document */
  update?: InputMaybe<TwoColumnLayoutParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumnLayoutParent document */
  upsert?: InputMaybe<TwoColumnLayoutParentUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>;
};

export type TwoColumnLayoutParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>;
};

export type TwoColumnLayoutUpdateInput = {
  column1?: InputMaybe<TwoColumnLayoutcolumn1UnionUpdateOneInlineInput>;
  column2?: InputMaybe<TwoColumnLayoutcolumn2UnionUpdateOneInlineInput>;
  isColumn1Loading1stOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TwoColumnLayoutUpdateManyInlineInput = {
  /** Create and connect multiple TwoColumnLayout component instances */
  create?: InputMaybe<Array<TwoColumnLayoutCreateWithPositionInput>>;
  /** Delete multiple TwoColumnLayout documents */
  delete?: InputMaybe<Array<TwoColumnLayoutWhereUniqueInput>>;
  /** Update multiple TwoColumnLayout component instances */
  update?: InputMaybe<Array<TwoColumnLayoutUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TwoColumnLayout component instances */
  upsert?: InputMaybe<Array<TwoColumnLayoutUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TwoColumnLayoutUpdateManyInput = {
  isColumn1Loading1stOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TwoColumnLayoutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TwoColumnLayoutUpdateManyInput;
  /** Document search */
  where: TwoColumnLayoutWhereInput;
};

export type TwoColumnLayoutUpdateOneInlineInput = {
  /** Create and connect one TwoColumnLayout document */
  create?: InputMaybe<TwoColumnLayoutCreateInput>;
  /** Delete currently connected TwoColumnLayout document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumnLayout document */
  update?: InputMaybe<TwoColumnLayoutUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumnLayout document */
  upsert?: InputMaybe<TwoColumnLayoutUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TwoColumnLayoutUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwoColumnLayoutWhereUniqueInput;
};

export type TwoColumnLayoutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TwoColumnLayoutUpdateInput;
  /** Unique document search */
  where: TwoColumnLayoutWhereUniqueInput;
};

export type TwoColumnLayoutUpsertInput = {
  /** Create document if it didn't exist */
  create: TwoColumnLayoutCreateInput;
  /** Update document if it exists */
  update: TwoColumnLayoutUpdateInput;
};

export type TwoColumnLayoutUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TwoColumnLayoutUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TwoColumnLayoutWhereUniqueInput;
};

export type TwoColumnLayoutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TwoColumnLayoutUpsertInput;
  /** Unique document search */
  where: TwoColumnLayoutWhereUniqueInput;
};

/** Identifies documents */
export type TwoColumnLayoutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TwoColumnLayoutWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TwoColumnLayoutWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TwoColumnLayoutWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the modular component is connected to the given models */
  column1?: InputMaybe<TwoColumnLayoutcolumn1UnionWhereInput>;
  /** All values in which the union is empty. */
  column1_empty?: InputMaybe<Scalars['Boolean']['input']>;
  /** All values in which the modular component is connected to the given models */
  column2?: InputMaybe<TwoColumnLayoutcolumn2UnionWhereInput>;
  /** All values in which the union is empty. */
  column2_empty?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isColumn1Loading1stOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isColumn1Loading1stOnMobile_not?: InputMaybe<Scalars['Boolean']['input']>;
};

/** References TwoColumnLayout record uniquely */
export type TwoColumnLayoutWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TwoColumnLayoutcolumn1Union = Form | Media;

export type TwoColumnLayoutcolumn1UnionConnectInput = {
  Form?: InputMaybe<FormConnectInput>;
  Media?: InputMaybe<MediaConnectInput>;
};

export type TwoColumnLayoutcolumn1UnionCreateInput = {
  Form?: InputMaybe<FormCreateInput>;
  Media?: InputMaybe<MediaCreateInput>;
};

export type TwoColumnLayoutcolumn1UnionCreateManyInlineInput = {
  /** Create and connect multiple existing TwoColumnLayoutcolumn1Union documents */
  create?: InputMaybe<Array<TwoColumnLayoutcolumn1UnionCreateInput>>;
};

export type TwoColumnLayoutcolumn1UnionCreateOneInlineInput = {
  /** Create and connect one TwoColumnLayoutcolumn1Union document */
  create?: InputMaybe<TwoColumnLayoutcolumn1UnionCreateInput>;
};

export type TwoColumnLayoutcolumn1UnionCreateWithPositionInput = {
  Form?: InputMaybe<FormCreateWithPositionInput>;
  Media?: InputMaybe<MediaCreateWithPositionInput>;
};

export type TwoColumnLayoutcolumn1UnionUpdateInput = {
  Form?: InputMaybe<FormUpdateInput>;
  Media?: InputMaybe<MediaUpdateInput>;
};

export type TwoColumnLayoutcolumn1UnionUpdateManyInlineInput = {
  /** Create and connect multiple TwoColumnLayoutcolumn1Union component instances */
  create?: InputMaybe<Array<TwoColumnLayoutcolumn1UnionCreateWithPositionInput>>;
  /** Delete multiple TwoColumnLayoutcolumn1Union documents */
  delete?: InputMaybe<Array<TwoColumnLayoutcolumn1UnionWhereUniqueInput>>;
  /** Update multiple TwoColumnLayoutcolumn1Union component instances */
  update?: InputMaybe<Array<TwoColumnLayoutcolumn1UnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TwoColumnLayoutcolumn1Union component instances */
  upsert?: InputMaybe<Array<TwoColumnLayoutcolumn1UnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TwoColumnLayoutcolumn1UnionUpdateManyWithNestedWhereInput = {
  Form?: InputMaybe<FormUpdateManyWithNestedWhereInput>;
  Media?: InputMaybe<MediaUpdateManyWithNestedWhereInput>;
};

export type TwoColumnLayoutcolumn1UnionUpdateOneInlineInput = {
  /** Create and connect one TwoColumnLayoutcolumn1Union document */
  create?: InputMaybe<TwoColumnLayoutcolumn1UnionCreateInput>;
  /** Delete currently connected TwoColumnLayoutcolumn1Union document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumnLayoutcolumn1Union document */
  update?: InputMaybe<TwoColumnLayoutcolumn1UnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumnLayoutcolumn1Union document */
  upsert?: InputMaybe<TwoColumnLayoutcolumn1UnionUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutcolumn1UnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueAndPositionInput>;
  Media?: InputMaybe<MediaUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnLayoutcolumn1UnionUpdateWithNestedWhereUniqueInput = {
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueInput>;
  Media?: InputMaybe<MediaUpdateWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutcolumn1UnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueAndPositionInput>;
  Media?: InputMaybe<MediaUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnLayoutcolumn1UnionUpsertWithNestedWhereUniqueInput = {
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueInput>;
  Media?: InputMaybe<MediaUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutcolumn1UnionWhereInput = {
  Form?: InputMaybe<FormWhereInput>;
  Media?: InputMaybe<MediaWhereInput>;
};

export type TwoColumnLayoutcolumn1UnionWhereUniqueInput = {
  Form?: InputMaybe<FormWhereUniqueInput>;
  Media?: InputMaybe<MediaWhereUniqueInput>;
};

export type TwoColumnLayoutcolumn2Union = Form | Media;

export type TwoColumnLayoutcolumn2UnionConnectInput = {
  Form?: InputMaybe<FormConnectInput>;
  Media?: InputMaybe<MediaConnectInput>;
};

export type TwoColumnLayoutcolumn2UnionCreateInput = {
  Form?: InputMaybe<FormCreateInput>;
  Media?: InputMaybe<MediaCreateInput>;
};

export type TwoColumnLayoutcolumn2UnionCreateManyInlineInput = {
  /** Create and connect multiple existing TwoColumnLayoutcolumn2Union documents */
  create?: InputMaybe<Array<TwoColumnLayoutcolumn2UnionCreateInput>>;
};

export type TwoColumnLayoutcolumn2UnionCreateOneInlineInput = {
  /** Create and connect one TwoColumnLayoutcolumn2Union document */
  create?: InputMaybe<TwoColumnLayoutcolumn2UnionCreateInput>;
};

export type TwoColumnLayoutcolumn2UnionCreateWithPositionInput = {
  Form?: InputMaybe<FormCreateWithPositionInput>;
  Media?: InputMaybe<MediaCreateWithPositionInput>;
};

export type TwoColumnLayoutcolumn2UnionUpdateInput = {
  Form?: InputMaybe<FormUpdateInput>;
  Media?: InputMaybe<MediaUpdateInput>;
};

export type TwoColumnLayoutcolumn2UnionUpdateManyInlineInput = {
  /** Create and connect multiple TwoColumnLayoutcolumn2Union component instances */
  create?: InputMaybe<Array<TwoColumnLayoutcolumn2UnionCreateWithPositionInput>>;
  /** Delete multiple TwoColumnLayoutcolumn2Union documents */
  delete?: InputMaybe<Array<TwoColumnLayoutcolumn2UnionWhereUniqueInput>>;
  /** Update multiple TwoColumnLayoutcolumn2Union component instances */
  update?: InputMaybe<Array<TwoColumnLayoutcolumn2UnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple TwoColumnLayoutcolumn2Union component instances */
  upsert?: InputMaybe<Array<TwoColumnLayoutcolumn2UnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TwoColumnLayoutcolumn2UnionUpdateManyWithNestedWhereInput = {
  Form?: InputMaybe<FormUpdateManyWithNestedWhereInput>;
  Media?: InputMaybe<MediaUpdateManyWithNestedWhereInput>;
};

export type TwoColumnLayoutcolumn2UnionUpdateOneInlineInput = {
  /** Create and connect one TwoColumnLayoutcolumn2Union document */
  create?: InputMaybe<TwoColumnLayoutcolumn2UnionCreateInput>;
  /** Delete currently connected TwoColumnLayoutcolumn2Union document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TwoColumnLayoutcolumn2Union document */
  update?: InputMaybe<TwoColumnLayoutcolumn2UnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TwoColumnLayoutcolumn2Union document */
  upsert?: InputMaybe<TwoColumnLayoutcolumn2UnionUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutcolumn2UnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueAndPositionInput>;
  Media?: InputMaybe<MediaUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnLayoutcolumn2UnionUpdateWithNestedWhereUniqueInput = {
  Form?: InputMaybe<FormUpdateWithNestedWhereUniqueInput>;
  Media?: InputMaybe<MediaUpdateWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutcolumn2UnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueAndPositionInput>;
  Media?: InputMaybe<MediaUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type TwoColumnLayoutcolumn2UnionUpsertWithNestedWhereUniqueInput = {
  Form?: InputMaybe<FormUpsertWithNestedWhereUniqueInput>;
  Media?: InputMaybe<MediaUpsertWithNestedWhereUniqueInput>;
};

export type TwoColumnLayoutcolumn2UnionWhereInput = {
  Form?: InputMaybe<FormWhereInput>;
  Media?: InputMaybe<MediaWhereInput>;
};

export type TwoColumnLayoutcolumn2UnionWhereUniqueInput = {
  Form?: InputMaybe<FormWhereUniqueInput>;
  Media?: InputMaybe<MediaWhereUniqueInput>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export type VimeoEmbed = Entity & {
  __typename?: 'VimeoEmbed';
  /** Display the video's controls */
  hasControls: Scalars['Boolean']['output'];
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Volume must be 0 (muted) in order for autoplay to work */
  isAutoplayed: Scalars['Boolean']['output'];
  /** Starts in a background state with no controls to help with autoplay */
  isBackgroundVideo: Scalars['Boolean']['output'];
  /** Video replays after it's finished */
  isLooped: Scalars['Boolean']['output'];
  isResponsive: Scalars['Boolean']['output'];
  /** System stage field */
  stage: Stage;
  videoId?: Maybe<Scalars['String']['output']>;
  /**
   * Volume must be 0 in order to autoplay the video
   *
   */
  volume: Scalars['Int']['output'];
};

export type VimeoEmbedConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: VimeoEmbedWhereUniqueInput;
};

/** A connection to a list of items. */
export type VimeoEmbedConnection = {
  __typename?: 'VimeoEmbedConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<VimeoEmbedEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type VimeoEmbedCreateInput = {
  hasControls: Scalars['Boolean']['input'];
  isAutoplayed: Scalars['Boolean']['input'];
  isBackgroundVideo: Scalars['Boolean']['input'];
  isLooped: Scalars['Boolean']['input'];
  isResponsive: Scalars['Boolean']['input'];
  videoId?: InputMaybe<Scalars['String']['input']>;
  volume: Scalars['Int']['input'];
};

export type VimeoEmbedCreateManyInlineInput = {
  /** Create and connect multiple existing VimeoEmbed documents */
  create?: InputMaybe<Array<VimeoEmbedCreateInput>>;
};

export type VimeoEmbedCreateOneInlineInput = {
  /** Create and connect one VimeoEmbed document */
  create?: InputMaybe<VimeoEmbedCreateInput>;
};

export type VimeoEmbedCreateWithPositionInput = {
  /** Document to create */
  data: VimeoEmbedCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type VimeoEmbedEdge = {
  __typename?: 'VimeoEmbedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VimeoEmbed;
};

/** Identifies documents */
export type VimeoEmbedManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VimeoEmbedWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VimeoEmbedWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VimeoEmbedWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  hasControls?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasControls_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isAutoplayed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isAutoplayed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isBackgroundVideo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isBackgroundVideo_not?: InputMaybe<Scalars['Boolean']['input']>;
  isLooped?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isLooped_not?: InputMaybe<Scalars['Boolean']['input']>;
  isResponsive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isResponsive_not?: InputMaybe<Scalars['Boolean']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  videoId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  volume_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  volume_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  volume_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  volume_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  volume_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum VimeoEmbedOrderByInput {
  HasControlsAsc = 'hasControls_ASC',
  HasControlsDesc = 'hasControls_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsAutoplayedAsc = 'isAutoplayed_ASC',
  IsAutoplayedDesc = 'isAutoplayed_DESC',
  IsBackgroundVideoAsc = 'isBackgroundVideo_ASC',
  IsBackgroundVideoDesc = 'isBackgroundVideo_DESC',
  IsLoopedAsc = 'isLooped_ASC',
  IsLoopedDesc = 'isLooped_DESC',
  IsResponsiveAsc = 'isResponsive_ASC',
  IsResponsiveDesc = 'isResponsive_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC',
  VolumeAsc = 'volume_ASC',
  VolumeDesc = 'volume_DESC'
}

export type VimeoEmbedParent = Media;

export type VimeoEmbedParentConnectInput = {
  Media?: InputMaybe<MediaConnectInput>;
};

export type VimeoEmbedParentCreateInput = {
  Media?: InputMaybe<MediaCreateInput>;
};

export type VimeoEmbedParentCreateManyInlineInput = {
  /** Create and connect multiple existing VimeoEmbedParent documents */
  create?: InputMaybe<Array<VimeoEmbedParentCreateInput>>;
};

export type VimeoEmbedParentCreateOneInlineInput = {
  /** Create and connect one VimeoEmbedParent document */
  create?: InputMaybe<VimeoEmbedParentCreateInput>;
};

export type VimeoEmbedParentCreateWithPositionInput = {
  Media?: InputMaybe<MediaCreateWithPositionInput>;
};

export type VimeoEmbedParentUpdateInput = {
  Media?: InputMaybe<MediaUpdateInput>;
};

export type VimeoEmbedParentUpdateManyInlineInput = {
  /** Create and connect multiple VimeoEmbedParent component instances */
  create?: InputMaybe<Array<VimeoEmbedParentCreateWithPositionInput>>;
  /** Delete multiple VimeoEmbedParent documents */
  delete?: InputMaybe<Array<VimeoEmbedParentWhereUniqueInput>>;
  /** Update multiple VimeoEmbedParent component instances */
  update?: InputMaybe<Array<VimeoEmbedParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple VimeoEmbedParent component instances */
  upsert?: InputMaybe<Array<VimeoEmbedParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type VimeoEmbedParentUpdateManyWithNestedWhereInput = {
  Media?: InputMaybe<MediaUpdateManyWithNestedWhereInput>;
};

export type VimeoEmbedParentUpdateOneInlineInput = {
  /** Create and connect one VimeoEmbedParent document */
  create?: InputMaybe<VimeoEmbedParentCreateInput>;
  /** Delete currently connected VimeoEmbedParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single VimeoEmbedParent document */
  update?: InputMaybe<VimeoEmbedParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single VimeoEmbedParent document */
  upsert?: InputMaybe<VimeoEmbedParentUpsertWithNestedWhereUniqueInput>;
};

export type VimeoEmbedParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Media?: InputMaybe<MediaUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type VimeoEmbedParentUpdateWithNestedWhereUniqueInput = {
  Media?: InputMaybe<MediaUpdateWithNestedWhereUniqueInput>;
};

export type VimeoEmbedParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Media?: InputMaybe<MediaUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type VimeoEmbedParentUpsertWithNestedWhereUniqueInput = {
  Media?: InputMaybe<MediaUpsertWithNestedWhereUniqueInput>;
};

export type VimeoEmbedParentWhereInput = {
  Media?: InputMaybe<MediaWhereInput>;
};

export type VimeoEmbedParentWhereUniqueInput = {
  Media?: InputMaybe<MediaWhereUniqueInput>;
};

export type VimeoEmbedUpdateInput = {
  hasControls?: InputMaybe<Scalars['Boolean']['input']>;
  isAutoplayed?: InputMaybe<Scalars['Boolean']['input']>;
  isBackgroundVideo?: InputMaybe<Scalars['Boolean']['input']>;
  isLooped?: InputMaybe<Scalars['Boolean']['input']>;
  isResponsive?: InputMaybe<Scalars['Boolean']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
};

export type VimeoEmbedUpdateManyInlineInput = {
  /** Create and connect multiple VimeoEmbed component instances */
  create?: InputMaybe<Array<VimeoEmbedCreateWithPositionInput>>;
  /** Delete multiple VimeoEmbed documents */
  delete?: InputMaybe<Array<VimeoEmbedWhereUniqueInput>>;
  /** Update multiple VimeoEmbed component instances */
  update?: InputMaybe<Array<VimeoEmbedUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple VimeoEmbed component instances */
  upsert?: InputMaybe<Array<VimeoEmbedUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type VimeoEmbedUpdateManyInput = {
  hasControls?: InputMaybe<Scalars['Boolean']['input']>;
  isAutoplayed?: InputMaybe<Scalars['Boolean']['input']>;
  isBackgroundVideo?: InputMaybe<Scalars['Boolean']['input']>;
  isLooped?: InputMaybe<Scalars['Boolean']['input']>;
  isResponsive?: InputMaybe<Scalars['Boolean']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
};

export type VimeoEmbedUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: VimeoEmbedUpdateManyInput;
  /** Document search */
  where: VimeoEmbedWhereInput;
};

export type VimeoEmbedUpdateOneInlineInput = {
  /** Create and connect one VimeoEmbed document */
  create?: InputMaybe<VimeoEmbedCreateInput>;
  /** Delete currently connected VimeoEmbed document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single VimeoEmbed document */
  update?: InputMaybe<VimeoEmbedUpdateWithNestedWhereUniqueInput>;
  /** Upsert single VimeoEmbed document */
  upsert?: InputMaybe<VimeoEmbedUpsertWithNestedWhereUniqueInput>;
};

export type VimeoEmbedUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<VimeoEmbedUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: VimeoEmbedWhereUniqueInput;
};

export type VimeoEmbedUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: VimeoEmbedUpdateInput;
  /** Unique document search */
  where: VimeoEmbedWhereUniqueInput;
};

export type VimeoEmbedUpsertInput = {
  /** Create document if it didn't exist */
  create: VimeoEmbedCreateInput;
  /** Update document if it exists */
  update: VimeoEmbedUpdateInput;
};

export type VimeoEmbedUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<VimeoEmbedUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: VimeoEmbedWhereUniqueInput;
};

export type VimeoEmbedUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: VimeoEmbedUpsertInput;
  /** Unique document search */
  where: VimeoEmbedWhereUniqueInput;
};

/** Identifies documents */
export type VimeoEmbedWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<VimeoEmbedWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<VimeoEmbedWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<VimeoEmbedWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  hasControls?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  hasControls_not?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isAutoplayed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isAutoplayed_not?: InputMaybe<Scalars['Boolean']['input']>;
  isBackgroundVideo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isBackgroundVideo_not?: InputMaybe<Scalars['Boolean']['input']>;
  isLooped?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isLooped_not?: InputMaybe<Scalars['Boolean']['input']>;
  isResponsive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isResponsive_not?: InputMaybe<Scalars['Boolean']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  videoId_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  videoId_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  videoId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  videoId_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  videoId_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  videoId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  videoId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  videoId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  videoId_starts_with?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than the given value. */
  volume_gt?: InputMaybe<Scalars['Int']['input']>;
  /** All values greater than or equal the given value. */
  volume_gte?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are contained in given list. */
  volume_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** All values less than the given value. */
  volume_lt?: InputMaybe<Scalars['Int']['input']>;
  /** All values less than or equal the given value. */
  volume_lte?: InputMaybe<Scalars['Int']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  volume_not?: InputMaybe<Scalars['Int']['input']>;
  /** All values that are not contained in given list. */
  volume_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** References VimeoEmbed record uniquely */
export type VimeoEmbedWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type PageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', values: Array<{ __typename?: 'LandingPage', slug?: string | null, path?: Path | null, socialSharingImage?: { __typename?: 'Asset', url: string } | null, variants: Array<{ __typename?: 'Content', backgroundColor?: { __typename?: 'Color', hex: any } | null, primaryColor?: { __typename?: 'Color', hex: any } | null, sections: Array<{ __typename?: 'Section', containerWidth?: ContainerWidth | null, backgroundColor?: { __typename?: 'Color', hex: any } | null, primaryColor?: { __typename?: 'Color', hex: any } | null, type?: { __typename?: 'Collection', id: string, heading?: string | null, products: Array<string> } | null }> }>, localizations: Array<{ __typename?: 'LandingPage', locale: Locale, updatedAt: any, metaDescription?: string | null, title?: string | null }> }> };
