/* eslint-disable */
import * as Types from "../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace HeroesModule {
  interface DefinedFields {
    Query: 'searchHero';
    Hero: 'id' | 'name' | 'basestats' | 'biography' | 'appearance';
    Appearance: 'gender' | 'race';
    Biography: 'fullName' | 'placeOfBirth';
    PowerStats: 'intelligence' | 'strength' | 'power' | 'combat';
    EnduranceStats: 'intelligence' | 'strength' | 'speed' | 'durability';
    Stats: 'intelligence' | 'strength';
  };
  
  interface DefinedEnumValues {
    Gender: 'Male' | 'Female';
    Race: 'Human' | 'Animal';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Hero = Pick<Types.Hero, DefinedFields['Hero']>;
  export type BaseStats = Types.BaseStats;
  export type Biography = Pick<Types.Biography, DefinedFields['Biography']>;
  export type Appearance = Pick<Types.Appearance, DefinedFields['Appearance']>;
  export type Gender = DefinedEnumValues['Gender'];
  export type Race = DefinedEnumValues['Race'];
  export type PowerStats = Pick<Types.PowerStats, DefinedFields['PowerStats']>;
  export type EnduranceStats = Pick<Types.EnduranceStats, DefinedFields['EnduranceStats']>;
  export type Stats = Pick<Types.Stats, DefinedFields['Stats']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type HeroResolvers = Pick<Types.HeroResolvers, DefinedFields['Hero'] | '__isTypeOf'>;
  export type AppearanceResolvers = Pick<Types.AppearanceResolvers, DefinedFields['Appearance'] | '__isTypeOf'>;
  export type BiographyResolvers = Pick<Types.BiographyResolvers, DefinedFields['Biography'] | '__isTypeOf'>;
  export type PowerStatsResolvers = Pick<Types.PowerStatsResolvers, DefinedFields['PowerStats'] | '__isTypeOf'>;
  export type EnduranceStatsResolvers = Pick<Types.EnduranceStatsResolvers, DefinedFields['EnduranceStats'] | '__isTypeOf'>;
  export type StatsResolvers = Pick<Types.StatsResolvers, DefinedFields['Stats']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Hero?: HeroResolvers;
    Appearance?: AppearanceResolvers;
    Biography?: BiographyResolvers;
    PowerStats?: PowerStatsResolvers;
    EnduranceStats?: EnduranceStatsResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      searchHero?: gm.Middleware[];
    };
    Hero?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      basestats?: gm.Middleware[];
      biography?: gm.Middleware[];
      appearance?: gm.Middleware[];
    };
    Appearance?: {
      '*'?: gm.Middleware[];
      gender?: gm.Middleware[];
      race?: gm.Middleware[];
    };
    Biography?: {
      '*'?: gm.Middleware[];
      fullName?: gm.Middleware[];
      placeOfBirth?: gm.Middleware[];
    };
    PowerStats?: {
      '*'?: gm.Middleware[];
      intelligence?: gm.Middleware[];
      strength?: gm.Middleware[];
      power?: gm.Middleware[];
      combat?: gm.Middleware[];
    };
    EnduranceStats?: {
      '*'?: gm.Middleware[];
      intelligence?: gm.Middleware[];
      strength?: gm.Middleware[];
      speed?: gm.Middleware[];
      durability?: gm.Middleware[];
    };
  };
}