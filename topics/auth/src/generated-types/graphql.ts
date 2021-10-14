/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Appearance = {
  __typename?: 'Appearance';
  gender: Gender;
  race: Race;
};

export type Biography = {
  __typename?: 'Biography';
  fullName?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
};

export type Gender =
  | 'Male'
  | 'Female';

export type Hero = {
  __typename?: 'Hero';
  id: Scalars['ID'];
  name: Scalars['String'];
  powerstats: PowerStats;
  biography?: Maybe<Biography>;
  appearance: Appearance;
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PowerStats = Stats & {
  __typename?: 'PowerStats';
  power: Scalars['Int'];
  combat: Scalars['Int'];
  intelligence: Scalars['Int'];
  strength: Scalars['Int'];
  speed: Scalars['Float'];
  durability: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  helloGQL: Scalars['String'];
  searchHero: Array<Maybe<Hero>>;
};


export type QuerySearchHeroArgs = {
  name: Scalars['String'];
};

export type Race =
  | 'Human'
  | 'Animal';

export type Stats = {
  intelligence: Scalars['Int'];
  strength: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Appearance: ResolverTypeWrapper<Appearance>;
  Biography: ResolverTypeWrapper<Biography>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Gender: Gender;
  Hero: ResolverTypeWrapper<Hero>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  PowerStats: ResolverTypeWrapper<PowerStats>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Query: ResolverTypeWrapper<{}>;
  Race: Race;
  Stats: ResolversTypes['PowerStats'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Appearance: Appearance;
  Biography: Biography;
  String: Scalars['String'];
  Hero: Hero;
  ID: Scalars['ID'];
  Mutation: {};
  PowerStats: PowerStats;
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  Query: {};
  Stats: ResolversParentTypes['PowerStats'];
  Boolean: Scalars['Boolean'];
};

export type AppearanceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Appearance'] = ResolversParentTypes['Appearance']> = {
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  race?: Resolver<ResolversTypes['Race'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BiographyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Biography'] = ResolversParentTypes['Biography']> = {
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeroResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Hero'] = ResolversParentTypes['Hero']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  powerstats?: Resolver<ResolversTypes['PowerStats'], ParentType, ContextType>;
  biography?: Resolver<Maybe<ResolversTypes['Biography']>, ParentType, ContextType>;
  appearance?: Resolver<ResolversTypes['Appearance'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
};

export type PowerStatsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PowerStats'] = ResolversParentTypes['PowerStats']> = {
  power?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  combat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  intelligence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  strength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  speed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  durability?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  helloGQL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  searchHero?: Resolver<Array<Maybe<ResolversTypes['Hero']>>, ParentType, ContextType, RequireFields<QuerySearchHeroArgs, 'name'>>;
};

export type StatsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Stats'] = ResolversParentTypes['Stats']> = {
  __resolveType: TypeResolveFn<'PowerStats', ParentType, ContextType>;
  intelligence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  strength?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Appearance?: AppearanceResolvers<ContextType>;
  Biography?: BiographyResolvers<ContextType>;
  Hero?: HeroResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PowerStats?: PowerStatsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Stats?: StatsResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
