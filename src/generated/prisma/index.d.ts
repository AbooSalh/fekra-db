
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model coordinator
 * 
 */
export type coordinator = $Result.DefaultSelection<Prisma.$coordinatorPayload>
/**
 * Model employee
 * 
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>
/**
 * Model enroll
 * 
 */
export type enroll = $Result.DefaultSelection<Prisma.$enrollPayload>
/**
 * Model enrollment
 * 
 */
export type enrollment = $Result.DefaultSelection<Prisma.$enrollmentPayload>
/**
 * Model evaluation
 * 
 */
export type evaluation = $Result.DefaultSelection<Prisma.$evaluationPayload>
/**
 * Model external_mentor
 * 
 */
export type external_mentor = $Result.DefaultSelection<Prisma.$external_mentorPayload>
/**
 * Model fieldt_course
 * 
 */
export type fieldt_course = $Result.DefaultSelection<Prisma.$fieldt_coursePayload>
/**
 * Model internal_mentor
 * 
 */
export type internal_mentor = $Result.DefaultSelection<Prisma.$internal_mentorPayload>
/**
 * Model mentor
 * 
 */
export type mentor = $Result.DefaultSelection<Prisma.$mentorPayload>
/**
 * Model organization
 * 
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>
/**
 * Model person
 * 
 */
export type person = $Result.DefaultSelection<Prisma.$personPayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coordinators
 * const coordinators = await prisma.coordinator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Coordinators
   * const coordinators = await prisma.coordinator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.coordinator`: Exposes CRUD operations for the **coordinator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coordinators
    * const coordinators = await prisma.coordinator.findMany()
    * ```
    */
  get coordinator(): Prisma.coordinatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.employeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enroll`: Exposes CRUD operations for the **enroll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrolls
    * const enrolls = await prisma.enroll.findMany()
    * ```
    */
  get enroll(): Prisma.enrollDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.enrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.evaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.external_mentor`: Exposes CRUD operations for the **external_mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more External_mentors
    * const external_mentors = await prisma.external_mentor.findMany()
    * ```
    */
  get external_mentor(): Prisma.external_mentorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldt_course`: Exposes CRUD operations for the **fieldt_course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fieldt_courses
    * const fieldt_courses = await prisma.fieldt_course.findMany()
    * ```
    */
  get fieldt_course(): Prisma.fieldt_courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internal_mentor`: Exposes CRUD operations for the **internal_mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Internal_mentors
    * const internal_mentors = await prisma.internal_mentor.findMany()
    * ```
    */
  get internal_mentor(): Prisma.internal_mentorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentor`: Exposes CRUD operations for the **mentor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentors
    * const mentors = await prisma.mentor.findMany()
    * ```
    */
  get mentor(): Prisma.mentorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.organizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.personDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    coordinator: 'coordinator',
    employee: 'employee',
    enroll: 'enroll',
    enrollment: 'enrollment',
    evaluation: 'evaluation',
    external_mentor: 'external_mentor',
    fieldt_course: 'fieldt_course',
    internal_mentor: 'internal_mentor',
    mentor: 'mentor',
    organization: 'organization',
    person: 'person',
    student: 'student'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "coordinator" | "employee" | "enroll" | "enrollment" | "evaluation" | "external_mentor" | "fieldt_course" | "internal_mentor" | "mentor" | "organization" | "person" | "student"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      coordinator: {
        payload: Prisma.$coordinatorPayload<ExtArgs>
        fields: Prisma.coordinatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.coordinatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.coordinatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload>
          }
          findFirst: {
            args: Prisma.coordinatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.coordinatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload>
          }
          findMany: {
            args: Prisma.coordinatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload>[]
          }
          create: {
            args: Prisma.coordinatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload>
          }
          createMany: {
            args: Prisma.coordinatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.coordinatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload>
          }
          update: {
            args: Prisma.coordinatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload>
          }
          deleteMany: {
            args: Prisma.coordinatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.coordinatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.coordinatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coordinatorPayload>
          }
          aggregate: {
            args: Prisma.CoordinatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoordinator>
          }
          groupBy: {
            args: Prisma.coordinatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoordinatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.coordinatorCountArgs<ExtArgs>
            result: $Utils.Optional<CoordinatorCountAggregateOutputType> | number
          }
        }
      }
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>
        fields: Prisma.employeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[]
          }
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      enroll: {
        payload: Prisma.$enrollPayload<ExtArgs>
        fields: Prisma.enrollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload>
          }
          findFirst: {
            args: Prisma.enrollFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload>
          }
          findMany: {
            args: Prisma.enrollFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload>[]
          }
          create: {
            args: Prisma.enrollCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload>
          }
          createMany: {
            args: Prisma.enrollCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enrollDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload>
          }
          update: {
            args: Prisma.enrollUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload>
          }
          deleteMany: {
            args: Prisma.enrollDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrollUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enrollUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollPayload>
          }
          aggregate: {
            args: Prisma.EnrollAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnroll>
          }
          groupBy: {
            args: Prisma.enrollGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollCountAggregateOutputType> | number
          }
        }
      }
      enrollment: {
        payload: Prisma.$enrollmentPayload<ExtArgs>
        fields: Prisma.enrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          findFirst: {
            args: Prisma.enrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          findMany: {
            args: Prisma.enrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>[]
          }
          create: {
            args: Prisma.enrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          createMany: {
            args: Prisma.enrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          update: {
            args: Prisma.enrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          deleteMany: {
            args: Prisma.enrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.enrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      evaluation: {
        payload: Prisma.$evaluationPayload<ExtArgs>
        fields: Prisma.evaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload>
          }
          findFirst: {
            args: Prisma.evaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload>
          }
          findMany: {
            args: Prisma.evaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload>[]
          }
          create: {
            args: Prisma.evaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload>
          }
          createMany: {
            args: Prisma.evaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload>
          }
          update: {
            args: Prisma.evaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload>
          }
          deleteMany: {
            args: Prisma.evaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.evaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      external_mentor: {
        payload: Prisma.$external_mentorPayload<ExtArgs>
        fields: Prisma.external_mentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.external_mentorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.external_mentorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload>
          }
          findFirst: {
            args: Prisma.external_mentorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.external_mentorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload>
          }
          findMany: {
            args: Prisma.external_mentorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload>[]
          }
          create: {
            args: Prisma.external_mentorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload>
          }
          createMany: {
            args: Prisma.external_mentorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.external_mentorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload>
          }
          update: {
            args: Prisma.external_mentorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload>
          }
          deleteMany: {
            args: Prisma.external_mentorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.external_mentorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.external_mentorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$external_mentorPayload>
          }
          aggregate: {
            args: Prisma.External_mentorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternal_mentor>
          }
          groupBy: {
            args: Prisma.external_mentorGroupByArgs<ExtArgs>
            result: $Utils.Optional<External_mentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.external_mentorCountArgs<ExtArgs>
            result: $Utils.Optional<External_mentorCountAggregateOutputType> | number
          }
        }
      }
      fieldt_course: {
        payload: Prisma.$fieldt_coursePayload<ExtArgs>
        fields: Prisma.fieldt_courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fieldt_courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fieldt_courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload>
          }
          findFirst: {
            args: Prisma.fieldt_courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fieldt_courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload>
          }
          findMany: {
            args: Prisma.fieldt_courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload>[]
          }
          create: {
            args: Prisma.fieldt_courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload>
          }
          createMany: {
            args: Prisma.fieldt_courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fieldt_courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload>
          }
          update: {
            args: Prisma.fieldt_courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload>
          }
          deleteMany: {
            args: Prisma.fieldt_courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fieldt_courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fieldt_courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fieldt_coursePayload>
          }
          aggregate: {
            args: Prisma.Fieldt_courseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldt_course>
          }
          groupBy: {
            args: Prisma.fieldt_courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Fieldt_courseGroupByOutputType>[]
          }
          count: {
            args: Prisma.fieldt_courseCountArgs<ExtArgs>
            result: $Utils.Optional<Fieldt_courseCountAggregateOutputType> | number
          }
        }
      }
      internal_mentor: {
        payload: Prisma.$internal_mentorPayload<ExtArgs>
        fields: Prisma.internal_mentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.internal_mentorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.internal_mentorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload>
          }
          findFirst: {
            args: Prisma.internal_mentorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.internal_mentorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload>
          }
          findMany: {
            args: Prisma.internal_mentorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload>[]
          }
          create: {
            args: Prisma.internal_mentorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload>
          }
          createMany: {
            args: Prisma.internal_mentorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.internal_mentorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload>
          }
          update: {
            args: Prisma.internal_mentorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload>
          }
          deleteMany: {
            args: Prisma.internal_mentorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.internal_mentorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.internal_mentorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_mentorPayload>
          }
          aggregate: {
            args: Prisma.Internal_mentorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternal_mentor>
          }
          groupBy: {
            args: Prisma.internal_mentorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Internal_mentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.internal_mentorCountArgs<ExtArgs>
            result: $Utils.Optional<Internal_mentorCountAggregateOutputType> | number
          }
        }
      }
      mentor: {
        payload: Prisma.$mentorPayload<ExtArgs>
        fields: Prisma.mentorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mentorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mentorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          findFirst: {
            args: Prisma.mentorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mentorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          findMany: {
            args: Prisma.mentorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>[]
          }
          create: {
            args: Prisma.mentorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          createMany: {
            args: Prisma.mentorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mentorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          update: {
            args: Prisma.mentorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          deleteMany: {
            args: Prisma.mentorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mentorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mentorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mentorPayload>
          }
          aggregate: {
            args: Prisma.MentorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentor>
          }
          groupBy: {
            args: Prisma.mentorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentorGroupByOutputType>[]
          }
          count: {
            args: Prisma.mentorCountArgs<ExtArgs>
            result: $Utils.Optional<MentorCountAggregateOutputType> | number
          }
        }
      }
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>
        fields: Prisma.organizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[]
          }
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      person: {
        payload: Prisma.$personPayload<ExtArgs>
        fields: Prisma.personFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findFirst: {
            args: Prisma.personFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findMany: {
            args: Prisma.personFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          create: {
            args: Prisma.personCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          createMany: {
            args: Prisma.personCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.personDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          update: {
            args: Prisma.personUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          deleteMany: {
            args: Prisma.personDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.personUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.personGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.personCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    coordinator?: coordinatorOmit
    employee?: employeeOmit
    enroll?: enrollOmit
    enrollment?: enrollmentOmit
    evaluation?: evaluationOmit
    external_mentor?: external_mentorOmit
    fieldt_course?: fieldt_courseOmit
    internal_mentor?: internal_mentorOmit
    mentor?: mentorOmit
    organization?: organizationOmit
    person?: personOmit
    student?: studentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CoordinatorCountOutputType
   */

  export type CoordinatorCountOutputType = {
    enrollment: number
    organization: number
  }

  export type CoordinatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | CoordinatorCountOutputTypeCountEnrollmentArgs
    organization?: boolean | CoordinatorCountOutputTypeCountOrganizationArgs
  }

  // Custom InputTypes
  /**
   * CoordinatorCountOutputType without action
   */
  export type CoordinatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoordinatorCountOutputType
     */
    select?: CoordinatorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoordinatorCountOutputType without action
   */
  export type CoordinatorCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
  }

  /**
   * CoordinatorCountOutputType without action
   */
  export type CoordinatorCountOutputTypeCountOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
  }


  /**
   * Count Type Fieldt_courseCountOutputType
   */

  export type Fieldt_courseCountOutputType = {
    enroll: number
    enrollment: number
    mentor: number
  }

  export type Fieldt_courseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | Fieldt_courseCountOutputTypeCountEnrollArgs
    enrollment?: boolean | Fieldt_courseCountOutputTypeCountEnrollmentArgs
    mentor?: boolean | Fieldt_courseCountOutputTypeCountMentorArgs
  }

  // Custom InputTypes
  /**
   * Fieldt_courseCountOutputType without action
   */
  export type Fieldt_courseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fieldt_courseCountOutputType
     */
    select?: Fieldt_courseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Fieldt_courseCountOutputType without action
   */
  export type Fieldt_courseCountOutputTypeCountEnrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollWhereInput
  }

  /**
   * Fieldt_courseCountOutputType without action
   */
  export type Fieldt_courseCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
  }

  /**
   * Fieldt_courseCountOutputType without action
   */
  export type Fieldt_courseCountOutputTypeCountMentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mentorWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    external_mentor: number
    fieldt_course: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    external_mentor?: boolean | OrganizationCountOutputTypeCountExternal_mentorArgs
    fieldt_course?: boolean | OrganizationCountOutputTypeCountFieldt_courseArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountExternal_mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: external_mentorWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountFieldt_courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fieldt_courseWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    enroll: number
    enrollment: number
    internal_mentor: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | StudentCountOutputTypeCountEnrollArgs
    enrollment?: boolean | StudentCountOutputTypeCountEnrollmentArgs
    internal_mentor?: boolean | StudentCountOutputTypeCountInternal_mentorArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountInternal_mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internal_mentorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model coordinator
   */

  export type AggregateCoordinator = {
    _count: CoordinatorCountAggregateOutputType | null
    _avg: CoordinatorAvgAggregateOutputType | null
    _sum: CoordinatorSumAggregateOutputType | null
    _min: CoordinatorMinAggregateOutputType | null
    _max: CoordinatorMaxAggregateOutputType | null
  }

  export type CoordinatorAvgAggregateOutputType = {
    Coordinator_id: number | null
  }

  export type CoordinatorSumAggregateOutputType = {
    Coordinator_id: number | null
  }

  export type CoordinatorMinAggregateOutputType = {
    Coordinator_id: number | null
    Name: string | null
  }

  export type CoordinatorMaxAggregateOutputType = {
    Coordinator_id: number | null
    Name: string | null
  }

  export type CoordinatorCountAggregateOutputType = {
    Coordinator_id: number
    Name: number
    _all: number
  }


  export type CoordinatorAvgAggregateInputType = {
    Coordinator_id?: true
  }

  export type CoordinatorSumAggregateInputType = {
    Coordinator_id?: true
  }

  export type CoordinatorMinAggregateInputType = {
    Coordinator_id?: true
    Name?: true
  }

  export type CoordinatorMaxAggregateInputType = {
    Coordinator_id?: true
    Name?: true
  }

  export type CoordinatorCountAggregateInputType = {
    Coordinator_id?: true
    Name?: true
    _all?: true
  }

  export type CoordinatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coordinator to aggregate.
     */
    where?: coordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coordinators to fetch.
     */
    orderBy?: coordinatorOrderByWithRelationInput | coordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: coordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coordinators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned coordinators
    **/
    _count?: true | CoordinatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordinatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordinatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordinatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordinatorMaxAggregateInputType
  }

  export type GetCoordinatorAggregateType<T extends CoordinatorAggregateArgs> = {
        [P in keyof T & keyof AggregateCoordinator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoordinator[P]>
      : GetScalarType<T[P], AggregateCoordinator[P]>
  }




  export type coordinatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: coordinatorWhereInput
    orderBy?: coordinatorOrderByWithAggregationInput | coordinatorOrderByWithAggregationInput[]
    by: CoordinatorScalarFieldEnum[] | CoordinatorScalarFieldEnum
    having?: coordinatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordinatorCountAggregateInputType | true
    _avg?: CoordinatorAvgAggregateInputType
    _sum?: CoordinatorSumAggregateInputType
    _min?: CoordinatorMinAggregateInputType
    _max?: CoordinatorMaxAggregateInputType
  }

  export type CoordinatorGroupByOutputType = {
    Coordinator_id: number
    Name: string | null
    _count: CoordinatorCountAggregateOutputType | null
    _avg: CoordinatorAvgAggregateOutputType | null
    _sum: CoordinatorSumAggregateOutputType | null
    _min: CoordinatorMinAggregateOutputType | null
    _max: CoordinatorMaxAggregateOutputType | null
  }

  type GetCoordinatorGroupByPayload<T extends coordinatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoordinatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordinatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordinatorGroupByOutputType[P]>
            : GetScalarType<T[P], CoordinatorGroupByOutputType[P]>
        }
      >
    >


  export type coordinatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Coordinator_id?: boolean
    Name?: boolean
    enrollment?: boolean | coordinator$enrollmentArgs<ExtArgs>
    organization?: boolean | coordinator$organizationArgs<ExtArgs>
    _count?: boolean | CoordinatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coordinator"]>



  export type coordinatorSelectScalar = {
    Coordinator_id?: boolean
    Name?: boolean
  }

  export type coordinatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Coordinator_id" | "Name", ExtArgs["result"]["coordinator"]>
  export type coordinatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollment?: boolean | coordinator$enrollmentArgs<ExtArgs>
    organization?: boolean | coordinator$organizationArgs<ExtArgs>
    _count?: boolean | CoordinatorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $coordinatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "coordinator"
    objects: {
      enrollment: Prisma.$enrollmentPayload<ExtArgs>[]
      organization: Prisma.$organizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Coordinator_id: number
      Name: string | null
    }, ExtArgs["result"]["coordinator"]>
    composites: {}
  }

  type coordinatorGetPayload<S extends boolean | null | undefined | coordinatorDefaultArgs> = $Result.GetResult<Prisma.$coordinatorPayload, S>

  type coordinatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<coordinatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoordinatorCountAggregateInputType | true
    }

  export interface coordinatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['coordinator'], meta: { name: 'coordinator' } }
    /**
     * Find zero or one Coordinator that matches the filter.
     * @param {coordinatorFindUniqueArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends coordinatorFindUniqueArgs>(args: SelectSubset<T, coordinatorFindUniqueArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coordinator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {coordinatorFindUniqueOrThrowArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends coordinatorFindUniqueOrThrowArgs>(args: SelectSubset<T, coordinatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coordinatorFindFirstArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends coordinatorFindFirstArgs>(args?: SelectSubset<T, coordinatorFindFirstArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coordinator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coordinatorFindFirstOrThrowArgs} args - Arguments to find a Coordinator
     * @example
     * // Get one Coordinator
     * const coordinator = await prisma.coordinator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends coordinatorFindFirstOrThrowArgs>(args?: SelectSubset<T, coordinatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coordinators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coordinatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coordinators
     * const coordinators = await prisma.coordinator.findMany()
     * 
     * // Get first 10 Coordinators
     * const coordinators = await prisma.coordinator.findMany({ take: 10 })
     * 
     * // Only select the `Coordinator_id`
     * const coordinatorWithCoordinator_idOnly = await prisma.coordinator.findMany({ select: { Coordinator_id: true } })
     * 
     */
    findMany<T extends coordinatorFindManyArgs>(args?: SelectSubset<T, coordinatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coordinator.
     * @param {coordinatorCreateArgs} args - Arguments to create a Coordinator.
     * @example
     * // Create one Coordinator
     * const Coordinator = await prisma.coordinator.create({
     *   data: {
     *     // ... data to create a Coordinator
     *   }
     * })
     * 
     */
    create<T extends coordinatorCreateArgs>(args: SelectSubset<T, coordinatorCreateArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coordinators.
     * @param {coordinatorCreateManyArgs} args - Arguments to create many Coordinators.
     * @example
     * // Create many Coordinators
     * const coordinator = await prisma.coordinator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends coordinatorCreateManyArgs>(args?: SelectSubset<T, coordinatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coordinator.
     * @param {coordinatorDeleteArgs} args - Arguments to delete one Coordinator.
     * @example
     * // Delete one Coordinator
     * const Coordinator = await prisma.coordinator.delete({
     *   where: {
     *     // ... filter to delete one Coordinator
     *   }
     * })
     * 
     */
    delete<T extends coordinatorDeleteArgs>(args: SelectSubset<T, coordinatorDeleteArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coordinator.
     * @param {coordinatorUpdateArgs} args - Arguments to update one Coordinator.
     * @example
     * // Update one Coordinator
     * const coordinator = await prisma.coordinator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends coordinatorUpdateArgs>(args: SelectSubset<T, coordinatorUpdateArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coordinators.
     * @param {coordinatorDeleteManyArgs} args - Arguments to filter Coordinators to delete.
     * @example
     * // Delete a few Coordinators
     * const { count } = await prisma.coordinator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends coordinatorDeleteManyArgs>(args?: SelectSubset<T, coordinatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coordinatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coordinators
     * const coordinator = await prisma.coordinator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends coordinatorUpdateManyArgs>(args: SelectSubset<T, coordinatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coordinator.
     * @param {coordinatorUpsertArgs} args - Arguments to update or create a Coordinator.
     * @example
     * // Update or create a Coordinator
     * const coordinator = await prisma.coordinator.upsert({
     *   create: {
     *     // ... data to create a Coordinator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coordinator we want to update
     *   }
     * })
     */
    upsert<T extends coordinatorUpsertArgs>(args: SelectSubset<T, coordinatorUpsertArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coordinators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coordinatorCountArgs} args - Arguments to filter Coordinators to count.
     * @example
     * // Count the number of Coordinators
     * const count = await prisma.coordinator.count({
     *   where: {
     *     // ... the filter for the Coordinators we want to count
     *   }
     * })
    **/
    count<T extends coordinatorCountArgs>(
      args?: Subset<T, coordinatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordinatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coordinator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoordinatorAggregateArgs>(args: Subset<T, CoordinatorAggregateArgs>): Prisma.PrismaPromise<GetCoordinatorAggregateType<T>>

    /**
     * Group by Coordinator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {coordinatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends coordinatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: coordinatorGroupByArgs['orderBy'] }
        : { orderBy?: coordinatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, coordinatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordinatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the coordinator model
   */
  readonly fields: coordinatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for coordinator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__coordinatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrollment<T extends coordinator$enrollmentArgs<ExtArgs> = {}>(args?: Subset<T, coordinator$enrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organization<T extends coordinator$organizationArgs<ExtArgs> = {}>(args?: Subset<T, coordinator$organizationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the coordinator model
   */
  interface coordinatorFieldRefs {
    readonly Coordinator_id: FieldRef<"coordinator", 'Int'>
    readonly Name: FieldRef<"coordinator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * coordinator findUnique
   */
  export type coordinatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * Filter, which coordinator to fetch.
     */
    where: coordinatorWhereUniqueInput
  }

  /**
   * coordinator findUniqueOrThrow
   */
  export type coordinatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * Filter, which coordinator to fetch.
     */
    where: coordinatorWhereUniqueInput
  }

  /**
   * coordinator findFirst
   */
  export type coordinatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * Filter, which coordinator to fetch.
     */
    where?: coordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coordinators to fetch.
     */
    orderBy?: coordinatorOrderByWithRelationInput | coordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coordinators.
     */
    cursor?: coordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coordinators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coordinators.
     */
    distinct?: CoordinatorScalarFieldEnum | CoordinatorScalarFieldEnum[]
  }

  /**
   * coordinator findFirstOrThrow
   */
  export type coordinatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * Filter, which coordinator to fetch.
     */
    where?: coordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coordinators to fetch.
     */
    orderBy?: coordinatorOrderByWithRelationInput | coordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for coordinators.
     */
    cursor?: coordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coordinators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of coordinators.
     */
    distinct?: CoordinatorScalarFieldEnum | CoordinatorScalarFieldEnum[]
  }

  /**
   * coordinator findMany
   */
  export type coordinatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * Filter, which coordinators to fetch.
     */
    where?: coordinatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of coordinators to fetch.
     */
    orderBy?: coordinatorOrderByWithRelationInput | coordinatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing coordinators.
     */
    cursor?: coordinatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` coordinators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` coordinators.
     */
    skip?: number
    distinct?: CoordinatorScalarFieldEnum | CoordinatorScalarFieldEnum[]
  }

  /**
   * coordinator create
   */
  export type coordinatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * The data needed to create a coordinator.
     */
    data: XOR<coordinatorCreateInput, coordinatorUncheckedCreateInput>
  }

  /**
   * coordinator createMany
   */
  export type coordinatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many coordinators.
     */
    data: coordinatorCreateManyInput | coordinatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * coordinator update
   */
  export type coordinatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * The data needed to update a coordinator.
     */
    data: XOR<coordinatorUpdateInput, coordinatorUncheckedUpdateInput>
    /**
     * Choose, which coordinator to update.
     */
    where: coordinatorWhereUniqueInput
  }

  /**
   * coordinator updateMany
   */
  export type coordinatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update coordinators.
     */
    data: XOR<coordinatorUpdateManyMutationInput, coordinatorUncheckedUpdateManyInput>
    /**
     * Filter which coordinators to update
     */
    where?: coordinatorWhereInput
    /**
     * Limit how many coordinators to update.
     */
    limit?: number
  }

  /**
   * coordinator upsert
   */
  export type coordinatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * The filter to search for the coordinator to update in case it exists.
     */
    where: coordinatorWhereUniqueInput
    /**
     * In case the coordinator found by the `where` argument doesn't exist, create a new coordinator with this data.
     */
    create: XOR<coordinatorCreateInput, coordinatorUncheckedCreateInput>
    /**
     * In case the coordinator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<coordinatorUpdateInput, coordinatorUncheckedUpdateInput>
  }

  /**
   * coordinator delete
   */
  export type coordinatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    /**
     * Filter which coordinator to delete.
     */
    where: coordinatorWhereUniqueInput
  }

  /**
   * coordinator deleteMany
   */
  export type coordinatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which coordinators to delete
     */
    where?: coordinatorWhereInput
    /**
     * Limit how many coordinators to delete.
     */
    limit?: number
  }

  /**
   * coordinator.enrollment
   */
  export type coordinator$enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    cursor?: enrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * coordinator.organization
   */
  export type coordinator$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    cursor?: organizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * coordinator without action
   */
  export type coordinatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
  }


  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    Employee_id: number | null
    Salary: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    Employee_id: number | null
    Salary: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    Employee_id: number | null
    Salary: number | null
    Position: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    Employee_id: number | null
    Salary: number | null
    Position: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    Employee_id: number
    Salary: number
    Position: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    Employee_id?: true
    Salary?: true
  }

  export type EmployeeSumAggregateInputType = {
    Employee_id?: true
    Salary?: true
  }

  export type EmployeeMinAggregateInputType = {
    Employee_id?: true
    Salary?: true
    Position?: true
  }

  export type EmployeeMaxAggregateInputType = {
    Employee_id?: true
    Salary?: true
    Position?: true
  }

  export type EmployeeCountAggregateInputType = {
    Employee_id?: true
    Salary?: true
    Position?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    Employee_id: number
    Salary: number | null
    Position: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Employee_id?: boolean
    Salary?: boolean
    Position?: boolean
    person?: boolean | personDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type employeeSelectScalar = {
    Employee_id?: boolean
    Salary?: boolean
    Position?: boolean
  }

  export type employeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Employee_id" | "Salary" | "Position", ExtArgs["result"]["employee"]>
  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | personDefaultArgs<ExtArgs>
  }

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employee"
    objects: {
      person: Prisma.$personPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Employee_id: number
      Salary: number | null
      Position: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<Prisma.$employeePayload, S>

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee'], meta: { name: 'employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeeFindUniqueArgs>(args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs>(args: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeeFindFirstArgs>(args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs>(args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `Employee_id`
     * const employeeWithEmployee_idOnly = await prisma.employee.findMany({ select: { Employee_id: true } })
     * 
     */
    findMany<T extends employeeFindManyArgs>(args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends employeeCreateArgs>(args: SelectSubset<T, employeeCreateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeeCreateManyArgs>(args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends employeeDeleteArgs>(args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeeUpdateArgs>(args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeeDeleteManyArgs>(args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeeUpdateManyArgs>(args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends employeeUpsertArgs>(args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employee model
   */
  readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly Employee_id: FieldRef<"employee", 'Int'>
    readonly Salary: FieldRef<"employee", 'Int'>
    readonly Position: FieldRef<"employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>
  }

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>
  }

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput
  }

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
  }


  /**
   * Model enroll
   */

  export type AggregateEnroll = {
    _count: EnrollCountAggregateOutputType | null
    _avg: EnrollAvgAggregateOutputType | null
    _sum: EnrollSumAggregateOutputType | null
    _min: EnrollMinAggregateOutputType | null
    _max: EnrollMaxAggregateOutputType | null
  }

  export type EnrollAvgAggregateOutputType = {
    Student_id: number | null
  }

  export type EnrollSumAggregateOutputType = {
    Student_id: number | null
  }

  export type EnrollMinAggregateOutputType = {
    Student_id: number | null
    Course_id: string | null
  }

  export type EnrollMaxAggregateOutputType = {
    Student_id: number | null
    Course_id: string | null
  }

  export type EnrollCountAggregateOutputType = {
    Student_id: number
    Course_id: number
    _all: number
  }


  export type EnrollAvgAggregateInputType = {
    Student_id?: true
  }

  export type EnrollSumAggregateInputType = {
    Student_id?: true
  }

  export type EnrollMinAggregateInputType = {
    Student_id?: true
    Course_id?: true
  }

  export type EnrollMaxAggregateInputType = {
    Student_id?: true
    Course_id?: true
  }

  export type EnrollCountAggregateInputType = {
    Student_id?: true
    Course_id?: true
    _all?: true
  }

  export type EnrollAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enroll to aggregate.
     */
    where?: enrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolls to fetch.
     */
    orderBy?: enrollOrderByWithRelationInput | enrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrolls
    **/
    _count?: true | EnrollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollMaxAggregateInputType
  }

  export type GetEnrollAggregateType<T extends EnrollAggregateArgs> = {
        [P in keyof T & keyof AggregateEnroll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnroll[P]>
      : GetScalarType<T[P], AggregateEnroll[P]>
  }




  export type enrollGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollWhereInput
    orderBy?: enrollOrderByWithAggregationInput | enrollOrderByWithAggregationInput[]
    by: EnrollScalarFieldEnum[] | EnrollScalarFieldEnum
    having?: enrollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollCountAggregateInputType | true
    _avg?: EnrollAvgAggregateInputType
    _sum?: EnrollSumAggregateInputType
    _min?: EnrollMinAggregateInputType
    _max?: EnrollMaxAggregateInputType
  }

  export type EnrollGroupByOutputType = {
    Student_id: number
    Course_id: string
    _count: EnrollCountAggregateOutputType | null
    _avg: EnrollAvgAggregateOutputType | null
    _sum: EnrollSumAggregateOutputType | null
    _min: EnrollMinAggregateOutputType | null
    _max: EnrollMaxAggregateOutputType | null
  }

  type GetEnrollGroupByPayload<T extends enrollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollGroupByOutputType[P]>
        }
      >
    >


  export type enrollSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Student_id?: boolean
    Course_id?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    fieldt_course?: boolean | fieldt_courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enroll"]>



  export type enrollSelectScalar = {
    Student_id?: boolean
    Course_id?: boolean
  }

  export type enrollOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Student_id" | "Course_id", ExtArgs["result"]["enroll"]>
  export type enrollInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    fieldt_course?: boolean | fieldt_courseDefaultArgs<ExtArgs>
  }

  export type $enrollPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enroll"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      fieldt_course: Prisma.$fieldt_coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Student_id: number
      Course_id: string
    }, ExtArgs["result"]["enroll"]>
    composites: {}
  }

  type enrollGetPayload<S extends boolean | null | undefined | enrollDefaultArgs> = $Result.GetResult<Prisma.$enrollPayload, S>

  type enrollCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrollFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollCountAggregateInputType | true
    }

  export interface enrollDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enroll'], meta: { name: 'enroll' } }
    /**
     * Find zero or one Enroll that matches the filter.
     * @param {enrollFindUniqueArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrollFindUniqueArgs>(args: SelectSubset<T, enrollFindUniqueArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enroll that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrollFindUniqueOrThrowArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrollFindUniqueOrThrowArgs>(args: SelectSubset<T, enrollFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enroll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollFindFirstArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrollFindFirstArgs>(args?: SelectSubset<T, enrollFindFirstArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enroll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollFindFirstOrThrowArgs} args - Arguments to find a Enroll
     * @example
     * // Get one Enroll
     * const enroll = await prisma.enroll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrollFindFirstOrThrowArgs>(args?: SelectSubset<T, enrollFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrolls
     * const enrolls = await prisma.enroll.findMany()
     * 
     * // Get first 10 Enrolls
     * const enrolls = await prisma.enroll.findMany({ take: 10 })
     * 
     * // Only select the `Student_id`
     * const enrollWithStudent_idOnly = await prisma.enroll.findMany({ select: { Student_id: true } })
     * 
     */
    findMany<T extends enrollFindManyArgs>(args?: SelectSubset<T, enrollFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enroll.
     * @param {enrollCreateArgs} args - Arguments to create a Enroll.
     * @example
     * // Create one Enroll
     * const Enroll = await prisma.enroll.create({
     *   data: {
     *     // ... data to create a Enroll
     *   }
     * })
     * 
     */
    create<T extends enrollCreateArgs>(args: SelectSubset<T, enrollCreateArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrolls.
     * @param {enrollCreateManyArgs} args - Arguments to create many Enrolls.
     * @example
     * // Create many Enrolls
     * const enroll = await prisma.enroll.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrollCreateManyArgs>(args?: SelectSubset<T, enrollCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enroll.
     * @param {enrollDeleteArgs} args - Arguments to delete one Enroll.
     * @example
     * // Delete one Enroll
     * const Enroll = await prisma.enroll.delete({
     *   where: {
     *     // ... filter to delete one Enroll
     *   }
     * })
     * 
     */
    delete<T extends enrollDeleteArgs>(args: SelectSubset<T, enrollDeleteArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enroll.
     * @param {enrollUpdateArgs} args - Arguments to update one Enroll.
     * @example
     * // Update one Enroll
     * const enroll = await prisma.enroll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrollUpdateArgs>(args: SelectSubset<T, enrollUpdateArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrolls.
     * @param {enrollDeleteManyArgs} args - Arguments to filter Enrolls to delete.
     * @example
     * // Delete a few Enrolls
     * const { count } = await prisma.enroll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrollDeleteManyArgs>(args?: SelectSubset<T, enrollDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrolls
     * const enroll = await prisma.enroll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrollUpdateManyArgs>(args: SelectSubset<T, enrollUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enroll.
     * @param {enrollUpsertArgs} args - Arguments to update or create a Enroll.
     * @example
     * // Update or create a Enroll
     * const enroll = await prisma.enroll.upsert({
     *   create: {
     *     // ... data to create a Enroll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enroll we want to update
     *   }
     * })
     */
    upsert<T extends enrollUpsertArgs>(args: SelectSubset<T, enrollUpsertArgs<ExtArgs>>): Prisma__enrollClient<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollCountArgs} args - Arguments to filter Enrolls to count.
     * @example
     * // Count the number of Enrolls
     * const count = await prisma.enroll.count({
     *   where: {
     *     // ... the filter for the Enrolls we want to count
     *   }
     * })
    **/
    count<T extends enrollCountArgs>(
      args?: Subset<T, enrollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollAggregateArgs>(args: Subset<T, EnrollAggregateArgs>): Prisma.PrismaPromise<GetEnrollAggregateType<T>>

    /**
     * Group by Enroll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enrollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollGroupByArgs['orderBy'] }
        : { orderBy?: enrollGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enrollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enroll model
   */
  readonly fields: enrollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enroll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fieldt_course<T extends fieldt_courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, fieldt_courseDefaultArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the enroll model
   */
  interface enrollFieldRefs {
    readonly Student_id: FieldRef<"enroll", 'Int'>
    readonly Course_id: FieldRef<"enroll", 'String'>
  }
    

  // Custom InputTypes
  /**
   * enroll findUnique
   */
  export type enrollFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * Filter, which enroll to fetch.
     */
    where: enrollWhereUniqueInput
  }

  /**
   * enroll findUniqueOrThrow
   */
  export type enrollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * Filter, which enroll to fetch.
     */
    where: enrollWhereUniqueInput
  }

  /**
   * enroll findFirst
   */
  export type enrollFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * Filter, which enroll to fetch.
     */
    where?: enrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolls to fetch.
     */
    orderBy?: enrollOrderByWithRelationInput | enrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrolls.
     */
    cursor?: enrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrolls.
     */
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * enroll findFirstOrThrow
   */
  export type enrollFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * Filter, which enroll to fetch.
     */
    where?: enrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolls to fetch.
     */
    orderBy?: enrollOrderByWithRelationInput | enrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrolls.
     */
    cursor?: enrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrolls.
     */
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * enroll findMany
   */
  export type enrollFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * Filter, which enrolls to fetch.
     */
    where?: enrollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrolls to fetch.
     */
    orderBy?: enrollOrderByWithRelationInput | enrollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrolls.
     */
    cursor?: enrollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrolls.
     */
    skip?: number
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * enroll create
   */
  export type enrollCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * The data needed to create a enroll.
     */
    data: XOR<enrollCreateInput, enrollUncheckedCreateInput>
  }

  /**
   * enroll createMany
   */
  export type enrollCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrolls.
     */
    data: enrollCreateManyInput | enrollCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enroll update
   */
  export type enrollUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * The data needed to update a enroll.
     */
    data: XOR<enrollUpdateInput, enrollUncheckedUpdateInput>
    /**
     * Choose, which enroll to update.
     */
    where: enrollWhereUniqueInput
  }

  /**
   * enroll updateMany
   */
  export type enrollUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrolls.
     */
    data: XOR<enrollUpdateManyMutationInput, enrollUncheckedUpdateManyInput>
    /**
     * Filter which enrolls to update
     */
    where?: enrollWhereInput
    /**
     * Limit how many enrolls to update.
     */
    limit?: number
  }

  /**
   * enroll upsert
   */
  export type enrollUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * The filter to search for the enroll to update in case it exists.
     */
    where: enrollWhereUniqueInput
    /**
     * In case the enroll found by the `where` argument doesn't exist, create a new enroll with this data.
     */
    create: XOR<enrollCreateInput, enrollUncheckedCreateInput>
    /**
     * In case the enroll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollUpdateInput, enrollUncheckedUpdateInput>
  }

  /**
   * enroll delete
   */
  export type enrollDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    /**
     * Filter which enroll to delete.
     */
    where: enrollWhereUniqueInput
  }

  /**
   * enroll deleteMany
   */
  export type enrollDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrolls to delete
     */
    where?: enrollWhereInput
    /**
     * Limit how many enrolls to delete.
     */
    limit?: number
  }

  /**
   * enroll without action
   */
  export type enrollDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
  }


  /**
   * Model enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    Enrollment_id: number | null
    Student_id: number | null
    Coordinator_id: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    Enrollment_id: number | null
    Student_id: number | null
    Coordinator_id: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    Enrollment_id: number | null
    Student_id: number | null
    Course_id: string | null
    Semester: string | null
    Final_grade: string | null
    Coordinator_id: number | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    Enrollment_id: number | null
    Student_id: number | null
    Course_id: string | null
    Semester: string | null
    Final_grade: string | null
    Coordinator_id: number | null
  }

  export type EnrollmentCountAggregateOutputType = {
    Enrollment_id: number
    Student_id: number
    Course_id: number
    Semester: number
    Final_grade: number
    Coordinator_id: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    Enrollment_id?: true
    Student_id?: true
    Coordinator_id?: true
  }

  export type EnrollmentSumAggregateInputType = {
    Enrollment_id?: true
    Student_id?: true
    Coordinator_id?: true
  }

  export type EnrollmentMinAggregateInputType = {
    Enrollment_id?: true
    Student_id?: true
    Course_id?: true
    Semester?: true
    Final_grade?: true
    Coordinator_id?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    Enrollment_id?: true
    Student_id?: true
    Course_id?: true
    Semester?: true
    Final_grade?: true
    Coordinator_id?: true
  }

  export type EnrollmentCountAggregateInputType = {
    Enrollment_id?: true
    Student_id?: true
    Course_id?: true
    Semester?: true
    Final_grade?: true
    Coordinator_id?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollment to aggregate.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type enrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithAggregationInput | enrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: enrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    Enrollment_id: number
    Student_id: number | null
    Course_id: string | null
    Semester: string | null
    Final_grade: string | null
    Coordinator_id: number | null
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends enrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type enrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Enrollment_id?: boolean
    Student_id?: boolean
    Course_id?: boolean
    Semester?: boolean
    Final_grade?: boolean
    Coordinator_id?: boolean
    student?: boolean | enrollment$studentArgs<ExtArgs>
    fieldt_course?: boolean | enrollment$fieldt_courseArgs<ExtArgs>
    coordinator?: boolean | enrollment$coordinatorArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>



  export type enrollmentSelectScalar = {
    Enrollment_id?: boolean
    Student_id?: boolean
    Course_id?: boolean
    Semester?: boolean
    Final_grade?: boolean
    Coordinator_id?: boolean
  }

  export type enrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Enrollment_id" | "Student_id" | "Course_id" | "Semester" | "Final_grade" | "Coordinator_id", ExtArgs["result"]["enrollment"]>
  export type enrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | enrollment$studentArgs<ExtArgs>
    fieldt_course?: boolean | enrollment$fieldt_courseArgs<ExtArgs>
    coordinator?: boolean | enrollment$coordinatorArgs<ExtArgs>
  }

  export type $enrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrollment"
    objects: {
      student: Prisma.$studentPayload<ExtArgs> | null
      fieldt_course: Prisma.$fieldt_coursePayload<ExtArgs> | null
      coordinator: Prisma.$coordinatorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Enrollment_id: number
      Student_id: number | null
      Course_id: string | null
      Semester: string | null
      Final_grade: string | null
      Coordinator_id: number | null
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type enrollmentGetPayload<S extends boolean | null | undefined | enrollmentDefaultArgs> = $Result.GetResult<Prisma.$enrollmentPayload, S>

  type enrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface enrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollment'], meta: { name: 'enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {enrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrollmentFindUniqueArgs>(args: SelectSubset<T, enrollmentFindUniqueArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, enrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrollmentFindFirstArgs>(args?: SelectSubset<T, enrollmentFindFirstArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, enrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `Enrollment_id`
     * const enrollmentWithEnrollment_idOnly = await prisma.enrollment.findMany({ select: { Enrollment_id: true } })
     * 
     */
    findMany<T extends enrollmentFindManyArgs>(args?: SelectSubset<T, enrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {enrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends enrollmentCreateArgs>(args: SelectSubset<T, enrollmentCreateArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {enrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrollmentCreateManyArgs>(args?: SelectSubset<T, enrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enrollment.
     * @param {enrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends enrollmentDeleteArgs>(args: SelectSubset<T, enrollmentDeleteArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {enrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrollmentUpdateArgs>(args: SelectSubset<T, enrollmentUpdateArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {enrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrollmentDeleteManyArgs>(args?: SelectSubset<T, enrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrollmentUpdateManyArgs>(args: SelectSubset<T, enrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {enrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends enrollmentUpsertArgs>(args: SelectSubset<T, enrollmentUpsertArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends enrollmentCountArgs>(
      args?: Subset<T, enrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollmentGroupByArgs['orderBy'] }
        : { orderBy?: enrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrollment model
   */
  readonly fields: enrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends enrollment$studentArgs<ExtArgs> = {}>(args?: Subset<T, enrollment$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    fieldt_course<T extends enrollment$fieldt_courseArgs<ExtArgs> = {}>(args?: Subset<T, enrollment$fieldt_courseArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coordinator<T extends enrollment$coordinatorArgs<ExtArgs> = {}>(args?: Subset<T, enrollment$coordinatorArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the enrollment model
   */
  interface enrollmentFieldRefs {
    readonly Enrollment_id: FieldRef<"enrollment", 'Int'>
    readonly Student_id: FieldRef<"enrollment", 'Int'>
    readonly Course_id: FieldRef<"enrollment", 'String'>
    readonly Semester: FieldRef<"enrollment", 'String'>
    readonly Final_grade: FieldRef<"enrollment", 'String'>
    readonly Coordinator_id: FieldRef<"enrollment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * enrollment findUnique
   */
  export type enrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment findUniqueOrThrow
   */
  export type enrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment findFirst
   */
  export type enrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment findFirstOrThrow
   */
  export type enrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment findMany
   */
  export type enrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment create
   */
  export type enrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a enrollment.
     */
    data: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>
  }

  /**
   * enrollment createMany
   */
  export type enrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentCreateManyInput | enrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enrollment update
   */
  export type enrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a enrollment.
     */
    data: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>
    /**
     * Choose, which enrollment to update.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment updateMany
   */
  export type enrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
  }

  /**
   * enrollment upsert
   */
  export type enrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the enrollment to update in case it exists.
     */
    where: enrollmentWhereUniqueInput
    /**
     * In case the enrollment found by the `where` argument doesn't exist, create a new enrollment with this data.
     */
    create: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>
    /**
     * In case the enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>
  }

  /**
   * enrollment delete
   */
  export type enrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter which enrollment to delete.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment deleteMany
   */
  export type enrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to delete
     */
    where?: enrollmentWhereInput
    /**
     * Limit how many enrollments to delete.
     */
    limit?: number
  }

  /**
   * enrollment.student
   */
  export type enrollment$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * enrollment.fieldt_course
   */
  export type enrollment$fieldt_courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    where?: fieldt_courseWhereInput
  }

  /**
   * enrollment.coordinator
   */
  export type enrollment$coordinatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    where?: coordinatorWhereInput
  }

  /**
   * enrollment without action
   */
  export type enrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
  }


  /**
   * Model evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    Evaluation_id: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    Evaluation_id: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    Evaluation_id: number | null
    Grade: string | null
  }

  export type EvaluationMaxAggregateOutputType = {
    Evaluation_id: number | null
    Grade: string | null
  }

  export type EvaluationCountAggregateOutputType = {
    Evaluation_id: number
    Grade: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    Evaluation_id?: true
  }

  export type EvaluationSumAggregateInputType = {
    Evaluation_id?: true
  }

  export type EvaluationMinAggregateInputType = {
    Evaluation_id?: true
    Grade?: true
  }

  export type EvaluationMaxAggregateInputType = {
    Evaluation_id?: true
    Grade?: true
  }

  export type EvaluationCountAggregateInputType = {
    Evaluation_id?: true
    Grade?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation to aggregate.
     */
    where?: evaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluations to fetch.
     */
    orderBy?: evaluationOrderByWithRelationInput | evaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type evaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluationWhereInput
    orderBy?: evaluationOrderByWithAggregationInput | evaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: evaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    Evaluation_id: number
    Grade: string | null
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends evaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type evaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Evaluation_id?: boolean
    Grade?: boolean
  }, ExtArgs["result"]["evaluation"]>



  export type evaluationSelectScalar = {
    Evaluation_id?: boolean
    Grade?: boolean
  }

  export type evaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Evaluation_id" | "Grade", ExtArgs["result"]["evaluation"]>

  export type $evaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Evaluation_id: number
      Grade: string | null
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type evaluationGetPayload<S extends boolean | null | undefined | evaluationDefaultArgs> = $Result.GetResult<Prisma.$evaluationPayload, S>

  type evaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<evaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface evaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation'], meta: { name: 'evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {evaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluationFindUniqueArgs>(args: SelectSubset<T, evaluationFindUniqueArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {evaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluationFindFirstArgs>(args?: SelectSubset<T, evaluationFindFirstArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `Evaluation_id`
     * const evaluationWithEvaluation_idOnly = await prisma.evaluation.findMany({ select: { Evaluation_id: true } })
     * 
     */
    findMany<T extends evaluationFindManyArgs>(args?: SelectSubset<T, evaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {evaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends evaluationCreateArgs>(args: SelectSubset<T, evaluationCreateArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {evaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluationCreateManyArgs>(args?: SelectSubset<T, evaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation.
     * @param {evaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends evaluationDeleteArgs>(args: SelectSubset<T, evaluationDeleteArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {evaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluationUpdateArgs>(args: SelectSubset<T, evaluationUpdateArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {evaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluationDeleteManyArgs>(args?: SelectSubset<T, evaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluationUpdateManyArgs>(args: SelectSubset<T, evaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation.
     * @param {evaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends evaluationUpsertArgs>(args: SelectSubset<T, evaluationUpsertArgs<ExtArgs>>): Prisma__evaluationClient<$Result.GetResult<Prisma.$evaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends evaluationCountArgs>(
      args?: Subset<T, evaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends evaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluationGroupByArgs['orderBy'] }
        : { orderBy?: evaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, evaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation model
   */
  readonly fields: evaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the evaluation model
   */
  interface evaluationFieldRefs {
    readonly Evaluation_id: FieldRef<"evaluation", 'Int'>
    readonly Grade: FieldRef<"evaluation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * evaluation findUnique
   */
  export type evaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * Filter, which evaluation to fetch.
     */
    where: evaluationWhereUniqueInput
  }

  /**
   * evaluation findUniqueOrThrow
   */
  export type evaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * Filter, which evaluation to fetch.
     */
    where: evaluationWhereUniqueInput
  }

  /**
   * evaluation findFirst
   */
  export type evaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * Filter, which evaluation to fetch.
     */
    where?: evaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluations to fetch.
     */
    orderBy?: evaluationOrderByWithRelationInput | evaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluations.
     */
    cursor?: evaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * evaluation findFirstOrThrow
   */
  export type evaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * Filter, which evaluation to fetch.
     */
    where?: evaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluations to fetch.
     */
    orderBy?: evaluationOrderByWithRelationInput | evaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluations.
     */
    cursor?: evaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * evaluation findMany
   */
  export type evaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * Filter, which evaluations to fetch.
     */
    where?: evaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluations to fetch.
     */
    orderBy?: evaluationOrderByWithRelationInput | evaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluations.
     */
    cursor?: evaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * evaluation create
   */
  export type evaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * The data needed to create a evaluation.
     */
    data: XOR<evaluationCreateInput, evaluationUncheckedCreateInput>
  }

  /**
   * evaluation createMany
   */
  export type evaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluations.
     */
    data: evaluationCreateManyInput | evaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation update
   */
  export type evaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * The data needed to update a evaluation.
     */
    data: XOR<evaluationUpdateInput, evaluationUncheckedUpdateInput>
    /**
     * Choose, which evaluation to update.
     */
    where: evaluationWhereUniqueInput
  }

  /**
   * evaluation updateMany
   */
  export type evaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluations.
     */
    data: XOR<evaluationUpdateManyMutationInput, evaluationUncheckedUpdateManyInput>
    /**
     * Filter which evaluations to update
     */
    where?: evaluationWhereInput
    /**
     * Limit how many evaluations to update.
     */
    limit?: number
  }

  /**
   * evaluation upsert
   */
  export type evaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * The filter to search for the evaluation to update in case it exists.
     */
    where: evaluationWhereUniqueInput
    /**
     * In case the evaluation found by the `where` argument doesn't exist, create a new evaluation with this data.
     */
    create: XOR<evaluationCreateInput, evaluationUncheckedCreateInput>
    /**
     * In case the evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluationUpdateInput, evaluationUncheckedUpdateInput>
  }

  /**
   * evaluation delete
   */
  export type evaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
    /**
     * Filter which evaluation to delete.
     */
    where: evaluationWhereUniqueInput
  }

  /**
   * evaluation deleteMany
   */
  export type evaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluations to delete
     */
    where?: evaluationWhereInput
    /**
     * Limit how many evaluations to delete.
     */
    limit?: number
  }

  /**
   * evaluation without action
   */
  export type evaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation
     */
    select?: evaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evaluation
     */
    omit?: evaluationOmit<ExtArgs> | null
  }


  /**
   * Model external_mentor
   */

  export type AggregateExternal_mentor = {
    _count: External_mentorCountAggregateOutputType | null
    _avg: External_mentorAvgAggregateOutputType | null
    _sum: External_mentorSumAggregateOutputType | null
    _min: External_mentorMinAggregateOutputType | null
    _max: External_mentorMaxAggregateOutputType | null
  }

  export type External_mentorAvgAggregateOutputType = {
    Ext_Mentor_id: number | null
    Org_id: number | null
  }

  export type External_mentorSumAggregateOutputType = {
    Ext_Mentor_id: number | null
    Org_id: number | null
  }

  export type External_mentorMinAggregateOutputType = {
    Ext_Mentor_id: number | null
    Org_id: number | null
  }

  export type External_mentorMaxAggregateOutputType = {
    Ext_Mentor_id: number | null
    Org_id: number | null
  }

  export type External_mentorCountAggregateOutputType = {
    Ext_Mentor_id: number
    Org_id: number
    _all: number
  }


  export type External_mentorAvgAggregateInputType = {
    Ext_Mentor_id?: true
    Org_id?: true
  }

  export type External_mentorSumAggregateInputType = {
    Ext_Mentor_id?: true
    Org_id?: true
  }

  export type External_mentorMinAggregateInputType = {
    Ext_Mentor_id?: true
    Org_id?: true
  }

  export type External_mentorMaxAggregateInputType = {
    Ext_Mentor_id?: true
    Org_id?: true
  }

  export type External_mentorCountAggregateInputType = {
    Ext_Mentor_id?: true
    Org_id?: true
    _all?: true
  }

  export type External_mentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which external_mentor to aggregate.
     */
    where?: external_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of external_mentors to fetch.
     */
    orderBy?: external_mentorOrderByWithRelationInput | external_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: external_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` external_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` external_mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned external_mentors
    **/
    _count?: true | External_mentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: External_mentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: External_mentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: External_mentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: External_mentorMaxAggregateInputType
  }

  export type GetExternal_mentorAggregateType<T extends External_mentorAggregateArgs> = {
        [P in keyof T & keyof AggregateExternal_mentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternal_mentor[P]>
      : GetScalarType<T[P], AggregateExternal_mentor[P]>
  }




  export type external_mentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: external_mentorWhereInput
    orderBy?: external_mentorOrderByWithAggregationInput | external_mentorOrderByWithAggregationInput[]
    by: External_mentorScalarFieldEnum[] | External_mentorScalarFieldEnum
    having?: external_mentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: External_mentorCountAggregateInputType | true
    _avg?: External_mentorAvgAggregateInputType
    _sum?: External_mentorSumAggregateInputType
    _min?: External_mentorMinAggregateInputType
    _max?: External_mentorMaxAggregateInputType
  }

  export type External_mentorGroupByOutputType = {
    Ext_Mentor_id: number
    Org_id: number | null
    _count: External_mentorCountAggregateOutputType | null
    _avg: External_mentorAvgAggregateOutputType | null
    _sum: External_mentorSumAggregateOutputType | null
    _min: External_mentorMinAggregateOutputType | null
    _max: External_mentorMaxAggregateOutputType | null
  }

  type GetExternal_mentorGroupByPayload<T extends external_mentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<External_mentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof External_mentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], External_mentorGroupByOutputType[P]>
            : GetScalarType<T[P], External_mentorGroupByOutputType[P]>
        }
      >
    >


  export type external_mentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Ext_Mentor_id?: boolean
    Org_id?: boolean
    mentor?: boolean | mentorDefaultArgs<ExtArgs>
    organization?: boolean | external_mentor$organizationArgs<ExtArgs>
  }, ExtArgs["result"]["external_mentor"]>



  export type external_mentorSelectScalar = {
    Ext_Mentor_id?: boolean
    Org_id?: boolean
  }

  export type external_mentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Ext_Mentor_id" | "Org_id", ExtArgs["result"]["external_mentor"]>
  export type external_mentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | mentorDefaultArgs<ExtArgs>
    organization?: boolean | external_mentor$organizationArgs<ExtArgs>
  }

  export type $external_mentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "external_mentor"
    objects: {
      mentor: Prisma.$mentorPayload<ExtArgs>
      organization: Prisma.$organizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Ext_Mentor_id: number
      Org_id: number | null
    }, ExtArgs["result"]["external_mentor"]>
    composites: {}
  }

  type external_mentorGetPayload<S extends boolean | null | undefined | external_mentorDefaultArgs> = $Result.GetResult<Prisma.$external_mentorPayload, S>

  type external_mentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<external_mentorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: External_mentorCountAggregateInputType | true
    }

  export interface external_mentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['external_mentor'], meta: { name: 'external_mentor' } }
    /**
     * Find zero or one External_mentor that matches the filter.
     * @param {external_mentorFindUniqueArgs} args - Arguments to find a External_mentor
     * @example
     * // Get one External_mentor
     * const external_mentor = await prisma.external_mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends external_mentorFindUniqueArgs>(args: SelectSubset<T, external_mentorFindUniqueArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one External_mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {external_mentorFindUniqueOrThrowArgs} args - Arguments to find a External_mentor
     * @example
     * // Get one External_mentor
     * const external_mentor = await prisma.external_mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends external_mentorFindUniqueOrThrowArgs>(args: SelectSubset<T, external_mentorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first External_mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {external_mentorFindFirstArgs} args - Arguments to find a External_mentor
     * @example
     * // Get one External_mentor
     * const external_mentor = await prisma.external_mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends external_mentorFindFirstArgs>(args?: SelectSubset<T, external_mentorFindFirstArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first External_mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {external_mentorFindFirstOrThrowArgs} args - Arguments to find a External_mentor
     * @example
     * // Get one External_mentor
     * const external_mentor = await prisma.external_mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends external_mentorFindFirstOrThrowArgs>(args?: SelectSubset<T, external_mentorFindFirstOrThrowArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more External_mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {external_mentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all External_mentors
     * const external_mentors = await prisma.external_mentor.findMany()
     * 
     * // Get first 10 External_mentors
     * const external_mentors = await prisma.external_mentor.findMany({ take: 10 })
     * 
     * // Only select the `Ext_Mentor_id`
     * const external_mentorWithExt_Mentor_idOnly = await prisma.external_mentor.findMany({ select: { Ext_Mentor_id: true } })
     * 
     */
    findMany<T extends external_mentorFindManyArgs>(args?: SelectSubset<T, external_mentorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a External_mentor.
     * @param {external_mentorCreateArgs} args - Arguments to create a External_mentor.
     * @example
     * // Create one External_mentor
     * const External_mentor = await prisma.external_mentor.create({
     *   data: {
     *     // ... data to create a External_mentor
     *   }
     * })
     * 
     */
    create<T extends external_mentorCreateArgs>(args: SelectSubset<T, external_mentorCreateArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many External_mentors.
     * @param {external_mentorCreateManyArgs} args - Arguments to create many External_mentors.
     * @example
     * // Create many External_mentors
     * const external_mentor = await prisma.external_mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends external_mentorCreateManyArgs>(args?: SelectSubset<T, external_mentorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a External_mentor.
     * @param {external_mentorDeleteArgs} args - Arguments to delete one External_mentor.
     * @example
     * // Delete one External_mentor
     * const External_mentor = await prisma.external_mentor.delete({
     *   where: {
     *     // ... filter to delete one External_mentor
     *   }
     * })
     * 
     */
    delete<T extends external_mentorDeleteArgs>(args: SelectSubset<T, external_mentorDeleteArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one External_mentor.
     * @param {external_mentorUpdateArgs} args - Arguments to update one External_mentor.
     * @example
     * // Update one External_mentor
     * const external_mentor = await prisma.external_mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends external_mentorUpdateArgs>(args: SelectSubset<T, external_mentorUpdateArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more External_mentors.
     * @param {external_mentorDeleteManyArgs} args - Arguments to filter External_mentors to delete.
     * @example
     * // Delete a few External_mentors
     * const { count } = await prisma.external_mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends external_mentorDeleteManyArgs>(args?: SelectSubset<T, external_mentorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more External_mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {external_mentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many External_mentors
     * const external_mentor = await prisma.external_mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends external_mentorUpdateManyArgs>(args: SelectSubset<T, external_mentorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one External_mentor.
     * @param {external_mentorUpsertArgs} args - Arguments to update or create a External_mentor.
     * @example
     * // Update or create a External_mentor
     * const external_mentor = await prisma.external_mentor.upsert({
     *   create: {
     *     // ... data to create a External_mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the External_mentor we want to update
     *   }
     * })
     */
    upsert<T extends external_mentorUpsertArgs>(args: SelectSubset<T, external_mentorUpsertArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of External_mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {external_mentorCountArgs} args - Arguments to filter External_mentors to count.
     * @example
     * // Count the number of External_mentors
     * const count = await prisma.external_mentor.count({
     *   where: {
     *     // ... the filter for the External_mentors we want to count
     *   }
     * })
    **/
    count<T extends external_mentorCountArgs>(
      args?: Subset<T, external_mentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], External_mentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a External_mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {External_mentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends External_mentorAggregateArgs>(args: Subset<T, External_mentorAggregateArgs>): Prisma.PrismaPromise<GetExternal_mentorAggregateType<T>>

    /**
     * Group by External_mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {external_mentorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends external_mentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: external_mentorGroupByArgs['orderBy'] }
        : { orderBy?: external_mentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, external_mentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternal_mentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the external_mentor model
   */
  readonly fields: external_mentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for external_mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__external_mentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends mentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mentorDefaultArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends external_mentor$organizationArgs<ExtArgs> = {}>(args?: Subset<T, external_mentor$organizationArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the external_mentor model
   */
  interface external_mentorFieldRefs {
    readonly Ext_Mentor_id: FieldRef<"external_mentor", 'Int'>
    readonly Org_id: FieldRef<"external_mentor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * external_mentor findUnique
   */
  export type external_mentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * Filter, which external_mentor to fetch.
     */
    where: external_mentorWhereUniqueInput
  }

  /**
   * external_mentor findUniqueOrThrow
   */
  export type external_mentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * Filter, which external_mentor to fetch.
     */
    where: external_mentorWhereUniqueInput
  }

  /**
   * external_mentor findFirst
   */
  export type external_mentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * Filter, which external_mentor to fetch.
     */
    where?: external_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of external_mentors to fetch.
     */
    orderBy?: external_mentorOrderByWithRelationInput | external_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for external_mentors.
     */
    cursor?: external_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` external_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` external_mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of external_mentors.
     */
    distinct?: External_mentorScalarFieldEnum | External_mentorScalarFieldEnum[]
  }

  /**
   * external_mentor findFirstOrThrow
   */
  export type external_mentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * Filter, which external_mentor to fetch.
     */
    where?: external_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of external_mentors to fetch.
     */
    orderBy?: external_mentorOrderByWithRelationInput | external_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for external_mentors.
     */
    cursor?: external_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` external_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` external_mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of external_mentors.
     */
    distinct?: External_mentorScalarFieldEnum | External_mentorScalarFieldEnum[]
  }

  /**
   * external_mentor findMany
   */
  export type external_mentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * Filter, which external_mentors to fetch.
     */
    where?: external_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of external_mentors to fetch.
     */
    orderBy?: external_mentorOrderByWithRelationInput | external_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing external_mentors.
     */
    cursor?: external_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` external_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` external_mentors.
     */
    skip?: number
    distinct?: External_mentorScalarFieldEnum | External_mentorScalarFieldEnum[]
  }

  /**
   * external_mentor create
   */
  export type external_mentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * The data needed to create a external_mentor.
     */
    data: XOR<external_mentorCreateInput, external_mentorUncheckedCreateInput>
  }

  /**
   * external_mentor createMany
   */
  export type external_mentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many external_mentors.
     */
    data: external_mentorCreateManyInput | external_mentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * external_mentor update
   */
  export type external_mentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * The data needed to update a external_mentor.
     */
    data: XOR<external_mentorUpdateInput, external_mentorUncheckedUpdateInput>
    /**
     * Choose, which external_mentor to update.
     */
    where: external_mentorWhereUniqueInput
  }

  /**
   * external_mentor updateMany
   */
  export type external_mentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update external_mentors.
     */
    data: XOR<external_mentorUpdateManyMutationInput, external_mentorUncheckedUpdateManyInput>
    /**
     * Filter which external_mentors to update
     */
    where?: external_mentorWhereInput
    /**
     * Limit how many external_mentors to update.
     */
    limit?: number
  }

  /**
   * external_mentor upsert
   */
  export type external_mentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * The filter to search for the external_mentor to update in case it exists.
     */
    where: external_mentorWhereUniqueInput
    /**
     * In case the external_mentor found by the `where` argument doesn't exist, create a new external_mentor with this data.
     */
    create: XOR<external_mentorCreateInput, external_mentorUncheckedCreateInput>
    /**
     * In case the external_mentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<external_mentorUpdateInput, external_mentorUncheckedUpdateInput>
  }

  /**
   * external_mentor delete
   */
  export type external_mentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    /**
     * Filter which external_mentor to delete.
     */
    where: external_mentorWhereUniqueInput
  }

  /**
   * external_mentor deleteMany
   */
  export type external_mentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which external_mentors to delete
     */
    where?: external_mentorWhereInput
    /**
     * Limit how many external_mentors to delete.
     */
    limit?: number
  }

  /**
   * external_mentor.organization
   */
  export type external_mentor$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    where?: organizationWhereInput
  }

  /**
   * external_mentor without action
   */
  export type external_mentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
  }


  /**
   * Model fieldt_course
   */

  export type AggregateFieldt_course = {
    _count: Fieldt_courseCountAggregateOutputType | null
    _avg: Fieldt_courseAvgAggregateOutputType | null
    _sum: Fieldt_courseSumAggregateOutputType | null
    _min: Fieldt_courseMinAggregateOutputType | null
    _max: Fieldt_courseMaxAggregateOutputType | null
  }

  export type Fieldt_courseAvgAggregateOutputType = {
    Org_id: number | null
  }

  export type Fieldt_courseSumAggregateOutputType = {
    Org_id: number | null
  }

  export type Fieldt_courseMinAggregateOutputType = {
    Course_id: string | null
    Name: string | null
    Duration: string | null
    Org_id: number | null
  }

  export type Fieldt_courseMaxAggregateOutputType = {
    Course_id: string | null
    Name: string | null
    Duration: string | null
    Org_id: number | null
  }

  export type Fieldt_courseCountAggregateOutputType = {
    Course_id: number
    Name: number
    Duration: number
    Org_id: number
    _all: number
  }


  export type Fieldt_courseAvgAggregateInputType = {
    Org_id?: true
  }

  export type Fieldt_courseSumAggregateInputType = {
    Org_id?: true
  }

  export type Fieldt_courseMinAggregateInputType = {
    Course_id?: true
    Name?: true
    Duration?: true
    Org_id?: true
  }

  export type Fieldt_courseMaxAggregateInputType = {
    Course_id?: true
    Name?: true
    Duration?: true
    Org_id?: true
  }

  export type Fieldt_courseCountAggregateInputType = {
    Course_id?: true
    Name?: true
    Duration?: true
    Org_id?: true
    _all?: true
  }

  export type Fieldt_courseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fieldt_course to aggregate.
     */
    where?: fieldt_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fieldt_courses to fetch.
     */
    orderBy?: fieldt_courseOrderByWithRelationInput | fieldt_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fieldt_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fieldt_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fieldt_courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fieldt_courses
    **/
    _count?: true | Fieldt_courseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fieldt_courseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fieldt_courseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fieldt_courseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fieldt_courseMaxAggregateInputType
  }

  export type GetFieldt_courseAggregateType<T extends Fieldt_courseAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldt_course]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldt_course[P]>
      : GetScalarType<T[P], AggregateFieldt_course[P]>
  }




  export type fieldt_courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fieldt_courseWhereInput
    orderBy?: fieldt_courseOrderByWithAggregationInput | fieldt_courseOrderByWithAggregationInput[]
    by: Fieldt_courseScalarFieldEnum[] | Fieldt_courseScalarFieldEnum
    having?: fieldt_courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fieldt_courseCountAggregateInputType | true
    _avg?: Fieldt_courseAvgAggregateInputType
    _sum?: Fieldt_courseSumAggregateInputType
    _min?: Fieldt_courseMinAggregateInputType
    _max?: Fieldt_courseMaxAggregateInputType
  }

  export type Fieldt_courseGroupByOutputType = {
    Course_id: string
    Name: string
    Duration: string
    Org_id: number | null
    _count: Fieldt_courseCountAggregateOutputType | null
    _avg: Fieldt_courseAvgAggregateOutputType | null
    _sum: Fieldt_courseSumAggregateOutputType | null
    _min: Fieldt_courseMinAggregateOutputType | null
    _max: Fieldt_courseMaxAggregateOutputType | null
  }

  type GetFieldt_courseGroupByPayload<T extends fieldt_courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fieldt_courseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fieldt_courseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fieldt_courseGroupByOutputType[P]>
            : GetScalarType<T[P], Fieldt_courseGroupByOutputType[P]>
        }
      >
    >


  export type fieldt_courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Course_id?: boolean
    Name?: boolean
    Duration?: boolean
    Org_id?: boolean
    enroll?: boolean | fieldt_course$enrollArgs<ExtArgs>
    enrollment?: boolean | fieldt_course$enrollmentArgs<ExtArgs>
    organization?: boolean | fieldt_course$organizationArgs<ExtArgs>
    mentor?: boolean | fieldt_course$mentorArgs<ExtArgs>
    _count?: boolean | Fieldt_courseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldt_course"]>



  export type fieldt_courseSelectScalar = {
    Course_id?: boolean
    Name?: boolean
    Duration?: boolean
    Org_id?: boolean
  }

  export type fieldt_courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Course_id" | "Name" | "Duration" | "Org_id", ExtArgs["result"]["fieldt_course"]>
  export type fieldt_courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | fieldt_course$enrollArgs<ExtArgs>
    enrollment?: boolean | fieldt_course$enrollmentArgs<ExtArgs>
    organization?: boolean | fieldt_course$organizationArgs<ExtArgs>
    mentor?: boolean | fieldt_course$mentorArgs<ExtArgs>
    _count?: boolean | Fieldt_courseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $fieldt_coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fieldt_course"
    objects: {
      enroll: Prisma.$enrollPayload<ExtArgs>[]
      enrollment: Prisma.$enrollmentPayload<ExtArgs>[]
      organization: Prisma.$organizationPayload<ExtArgs> | null
      mentor: Prisma.$mentorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Course_id: string
      Name: string
      Duration: string
      Org_id: number | null
    }, ExtArgs["result"]["fieldt_course"]>
    composites: {}
  }

  type fieldt_courseGetPayload<S extends boolean | null | undefined | fieldt_courseDefaultArgs> = $Result.GetResult<Prisma.$fieldt_coursePayload, S>

  type fieldt_courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fieldt_courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fieldt_courseCountAggregateInputType | true
    }

  export interface fieldt_courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fieldt_course'], meta: { name: 'fieldt_course' } }
    /**
     * Find zero or one Fieldt_course that matches the filter.
     * @param {fieldt_courseFindUniqueArgs} args - Arguments to find a Fieldt_course
     * @example
     * // Get one Fieldt_course
     * const fieldt_course = await prisma.fieldt_course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fieldt_courseFindUniqueArgs>(args: SelectSubset<T, fieldt_courseFindUniqueArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fieldt_course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fieldt_courseFindUniqueOrThrowArgs} args - Arguments to find a Fieldt_course
     * @example
     * // Get one Fieldt_course
     * const fieldt_course = await prisma.fieldt_course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fieldt_courseFindUniqueOrThrowArgs>(args: SelectSubset<T, fieldt_courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fieldt_course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldt_courseFindFirstArgs} args - Arguments to find a Fieldt_course
     * @example
     * // Get one Fieldt_course
     * const fieldt_course = await prisma.fieldt_course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fieldt_courseFindFirstArgs>(args?: SelectSubset<T, fieldt_courseFindFirstArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fieldt_course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldt_courseFindFirstOrThrowArgs} args - Arguments to find a Fieldt_course
     * @example
     * // Get one Fieldt_course
     * const fieldt_course = await prisma.fieldt_course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fieldt_courseFindFirstOrThrowArgs>(args?: SelectSubset<T, fieldt_courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fieldt_courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldt_courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fieldt_courses
     * const fieldt_courses = await prisma.fieldt_course.findMany()
     * 
     * // Get first 10 Fieldt_courses
     * const fieldt_courses = await prisma.fieldt_course.findMany({ take: 10 })
     * 
     * // Only select the `Course_id`
     * const fieldt_courseWithCourse_idOnly = await prisma.fieldt_course.findMany({ select: { Course_id: true } })
     * 
     */
    findMany<T extends fieldt_courseFindManyArgs>(args?: SelectSubset<T, fieldt_courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fieldt_course.
     * @param {fieldt_courseCreateArgs} args - Arguments to create a Fieldt_course.
     * @example
     * // Create one Fieldt_course
     * const Fieldt_course = await prisma.fieldt_course.create({
     *   data: {
     *     // ... data to create a Fieldt_course
     *   }
     * })
     * 
     */
    create<T extends fieldt_courseCreateArgs>(args: SelectSubset<T, fieldt_courseCreateArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fieldt_courses.
     * @param {fieldt_courseCreateManyArgs} args - Arguments to create many Fieldt_courses.
     * @example
     * // Create many Fieldt_courses
     * const fieldt_course = await prisma.fieldt_course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fieldt_courseCreateManyArgs>(args?: SelectSubset<T, fieldt_courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fieldt_course.
     * @param {fieldt_courseDeleteArgs} args - Arguments to delete one Fieldt_course.
     * @example
     * // Delete one Fieldt_course
     * const Fieldt_course = await prisma.fieldt_course.delete({
     *   where: {
     *     // ... filter to delete one Fieldt_course
     *   }
     * })
     * 
     */
    delete<T extends fieldt_courseDeleteArgs>(args: SelectSubset<T, fieldt_courseDeleteArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fieldt_course.
     * @param {fieldt_courseUpdateArgs} args - Arguments to update one Fieldt_course.
     * @example
     * // Update one Fieldt_course
     * const fieldt_course = await prisma.fieldt_course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fieldt_courseUpdateArgs>(args: SelectSubset<T, fieldt_courseUpdateArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fieldt_courses.
     * @param {fieldt_courseDeleteManyArgs} args - Arguments to filter Fieldt_courses to delete.
     * @example
     * // Delete a few Fieldt_courses
     * const { count } = await prisma.fieldt_course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fieldt_courseDeleteManyArgs>(args?: SelectSubset<T, fieldt_courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fieldt_courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldt_courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fieldt_courses
     * const fieldt_course = await prisma.fieldt_course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fieldt_courseUpdateManyArgs>(args: SelectSubset<T, fieldt_courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fieldt_course.
     * @param {fieldt_courseUpsertArgs} args - Arguments to update or create a Fieldt_course.
     * @example
     * // Update or create a Fieldt_course
     * const fieldt_course = await prisma.fieldt_course.upsert({
     *   create: {
     *     // ... data to create a Fieldt_course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fieldt_course we want to update
     *   }
     * })
     */
    upsert<T extends fieldt_courseUpsertArgs>(args: SelectSubset<T, fieldt_courseUpsertArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fieldt_courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldt_courseCountArgs} args - Arguments to filter Fieldt_courses to count.
     * @example
     * // Count the number of Fieldt_courses
     * const count = await prisma.fieldt_course.count({
     *   where: {
     *     // ... the filter for the Fieldt_courses we want to count
     *   }
     * })
    **/
    count<T extends fieldt_courseCountArgs>(
      args?: Subset<T, fieldt_courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fieldt_courseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fieldt_course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fieldt_courseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fieldt_courseAggregateArgs>(args: Subset<T, Fieldt_courseAggregateArgs>): Prisma.PrismaPromise<GetFieldt_courseAggregateType<T>>

    /**
     * Group by Fieldt_course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fieldt_courseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fieldt_courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fieldt_courseGroupByArgs['orderBy'] }
        : { orderBy?: fieldt_courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fieldt_courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldt_courseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fieldt_course model
   */
  readonly fields: fieldt_courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fieldt_course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fieldt_courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enroll<T extends fieldt_course$enrollArgs<ExtArgs> = {}>(args?: Subset<T, fieldt_course$enrollArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollment<T extends fieldt_course$enrollmentArgs<ExtArgs> = {}>(args?: Subset<T, fieldt_course$enrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organization<T extends fieldt_course$organizationArgs<ExtArgs> = {}>(args?: Subset<T, fieldt_course$organizationArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentor<T extends fieldt_course$mentorArgs<ExtArgs> = {}>(args?: Subset<T, fieldt_course$mentorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fieldt_course model
   */
  interface fieldt_courseFieldRefs {
    readonly Course_id: FieldRef<"fieldt_course", 'String'>
    readonly Name: FieldRef<"fieldt_course", 'String'>
    readonly Duration: FieldRef<"fieldt_course", 'String'>
    readonly Org_id: FieldRef<"fieldt_course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * fieldt_course findUnique
   */
  export type fieldt_courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * Filter, which fieldt_course to fetch.
     */
    where: fieldt_courseWhereUniqueInput
  }

  /**
   * fieldt_course findUniqueOrThrow
   */
  export type fieldt_courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * Filter, which fieldt_course to fetch.
     */
    where: fieldt_courseWhereUniqueInput
  }

  /**
   * fieldt_course findFirst
   */
  export type fieldt_courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * Filter, which fieldt_course to fetch.
     */
    where?: fieldt_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fieldt_courses to fetch.
     */
    orderBy?: fieldt_courseOrderByWithRelationInput | fieldt_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fieldt_courses.
     */
    cursor?: fieldt_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fieldt_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fieldt_courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fieldt_courses.
     */
    distinct?: Fieldt_courseScalarFieldEnum | Fieldt_courseScalarFieldEnum[]
  }

  /**
   * fieldt_course findFirstOrThrow
   */
  export type fieldt_courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * Filter, which fieldt_course to fetch.
     */
    where?: fieldt_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fieldt_courses to fetch.
     */
    orderBy?: fieldt_courseOrderByWithRelationInput | fieldt_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fieldt_courses.
     */
    cursor?: fieldt_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fieldt_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fieldt_courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fieldt_courses.
     */
    distinct?: Fieldt_courseScalarFieldEnum | Fieldt_courseScalarFieldEnum[]
  }

  /**
   * fieldt_course findMany
   */
  export type fieldt_courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * Filter, which fieldt_courses to fetch.
     */
    where?: fieldt_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fieldt_courses to fetch.
     */
    orderBy?: fieldt_courseOrderByWithRelationInput | fieldt_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fieldt_courses.
     */
    cursor?: fieldt_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fieldt_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fieldt_courses.
     */
    skip?: number
    distinct?: Fieldt_courseScalarFieldEnum | Fieldt_courseScalarFieldEnum[]
  }

  /**
   * fieldt_course create
   */
  export type fieldt_courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * The data needed to create a fieldt_course.
     */
    data: XOR<fieldt_courseCreateInput, fieldt_courseUncheckedCreateInput>
  }

  /**
   * fieldt_course createMany
   */
  export type fieldt_courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fieldt_courses.
     */
    data: fieldt_courseCreateManyInput | fieldt_courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fieldt_course update
   */
  export type fieldt_courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * The data needed to update a fieldt_course.
     */
    data: XOR<fieldt_courseUpdateInput, fieldt_courseUncheckedUpdateInput>
    /**
     * Choose, which fieldt_course to update.
     */
    where: fieldt_courseWhereUniqueInput
  }

  /**
   * fieldt_course updateMany
   */
  export type fieldt_courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fieldt_courses.
     */
    data: XOR<fieldt_courseUpdateManyMutationInput, fieldt_courseUncheckedUpdateManyInput>
    /**
     * Filter which fieldt_courses to update
     */
    where?: fieldt_courseWhereInput
    /**
     * Limit how many fieldt_courses to update.
     */
    limit?: number
  }

  /**
   * fieldt_course upsert
   */
  export type fieldt_courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * The filter to search for the fieldt_course to update in case it exists.
     */
    where: fieldt_courseWhereUniqueInput
    /**
     * In case the fieldt_course found by the `where` argument doesn't exist, create a new fieldt_course with this data.
     */
    create: XOR<fieldt_courseCreateInput, fieldt_courseUncheckedCreateInput>
    /**
     * In case the fieldt_course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fieldt_courseUpdateInput, fieldt_courseUncheckedUpdateInput>
  }

  /**
   * fieldt_course delete
   */
  export type fieldt_courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    /**
     * Filter which fieldt_course to delete.
     */
    where: fieldt_courseWhereUniqueInput
  }

  /**
   * fieldt_course deleteMany
   */
  export type fieldt_courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fieldt_courses to delete
     */
    where?: fieldt_courseWhereInput
    /**
     * Limit how many fieldt_courses to delete.
     */
    limit?: number
  }

  /**
   * fieldt_course.enroll
   */
  export type fieldt_course$enrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    where?: enrollWhereInput
    orderBy?: enrollOrderByWithRelationInput | enrollOrderByWithRelationInput[]
    cursor?: enrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * fieldt_course.enrollment
   */
  export type fieldt_course$enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    cursor?: enrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * fieldt_course.organization
   */
  export type fieldt_course$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    where?: organizationWhereInput
  }

  /**
   * fieldt_course.mentor
   */
  export type fieldt_course$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    where?: mentorWhereInput
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    cursor?: mentorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * fieldt_course without action
   */
  export type fieldt_courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
  }


  /**
   * Model internal_mentor
   */

  export type AggregateInternal_mentor = {
    _count: Internal_mentorCountAggregateOutputType | null
    _avg: Internal_mentorAvgAggregateOutputType | null
    _sum: Internal_mentorSumAggregateOutputType | null
    _min: Internal_mentorMinAggregateOutputType | null
    _max: Internal_mentorMaxAggregateOutputType | null
  }

  export type Internal_mentorAvgAggregateOutputType = {
    Int_Mentor_id: number | null
    Student_id: number | null
  }

  export type Internal_mentorSumAggregateOutputType = {
    Int_Mentor_id: number | null
    Student_id: number | null
  }

  export type Internal_mentorMinAggregateOutputType = {
    Int_Mentor_id: number | null
    Student_id: number | null
  }

  export type Internal_mentorMaxAggregateOutputType = {
    Int_Mentor_id: number | null
    Student_id: number | null
  }

  export type Internal_mentorCountAggregateOutputType = {
    Int_Mentor_id: number
    Student_id: number
    _all: number
  }


  export type Internal_mentorAvgAggregateInputType = {
    Int_Mentor_id?: true
    Student_id?: true
  }

  export type Internal_mentorSumAggregateInputType = {
    Int_Mentor_id?: true
    Student_id?: true
  }

  export type Internal_mentorMinAggregateInputType = {
    Int_Mentor_id?: true
    Student_id?: true
  }

  export type Internal_mentorMaxAggregateInputType = {
    Int_Mentor_id?: true
    Student_id?: true
  }

  export type Internal_mentorCountAggregateInputType = {
    Int_Mentor_id?: true
    Student_id?: true
    _all?: true
  }

  export type Internal_mentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internal_mentor to aggregate.
     */
    where?: internal_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_mentors to fetch.
     */
    orderBy?: internal_mentorOrderByWithRelationInput | internal_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: internal_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned internal_mentors
    **/
    _count?: true | Internal_mentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Internal_mentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Internal_mentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Internal_mentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Internal_mentorMaxAggregateInputType
  }

  export type GetInternal_mentorAggregateType<T extends Internal_mentorAggregateArgs> = {
        [P in keyof T & keyof AggregateInternal_mentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternal_mentor[P]>
      : GetScalarType<T[P], AggregateInternal_mentor[P]>
  }




  export type internal_mentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internal_mentorWhereInput
    orderBy?: internal_mentorOrderByWithAggregationInput | internal_mentorOrderByWithAggregationInput[]
    by: Internal_mentorScalarFieldEnum[] | Internal_mentorScalarFieldEnum
    having?: internal_mentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Internal_mentorCountAggregateInputType | true
    _avg?: Internal_mentorAvgAggregateInputType
    _sum?: Internal_mentorSumAggregateInputType
    _min?: Internal_mentorMinAggregateInputType
    _max?: Internal_mentorMaxAggregateInputType
  }

  export type Internal_mentorGroupByOutputType = {
    Int_Mentor_id: number
    Student_id: number | null
    _count: Internal_mentorCountAggregateOutputType | null
    _avg: Internal_mentorAvgAggregateOutputType | null
    _sum: Internal_mentorSumAggregateOutputType | null
    _min: Internal_mentorMinAggregateOutputType | null
    _max: Internal_mentorMaxAggregateOutputType | null
  }

  type GetInternal_mentorGroupByPayload<T extends internal_mentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Internal_mentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Internal_mentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Internal_mentorGroupByOutputType[P]>
            : GetScalarType<T[P], Internal_mentorGroupByOutputType[P]>
        }
      >
    >


  export type internal_mentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Int_Mentor_id?: boolean
    Student_id?: boolean
    mentor?: boolean | mentorDefaultArgs<ExtArgs>
    student?: boolean | internal_mentor$studentArgs<ExtArgs>
  }, ExtArgs["result"]["internal_mentor"]>



  export type internal_mentorSelectScalar = {
    Int_Mentor_id?: boolean
    Student_id?: boolean
  }

  export type internal_mentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Int_Mentor_id" | "Student_id", ExtArgs["result"]["internal_mentor"]>
  export type internal_mentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | mentorDefaultArgs<ExtArgs>
    student?: boolean | internal_mentor$studentArgs<ExtArgs>
  }

  export type $internal_mentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "internal_mentor"
    objects: {
      mentor: Prisma.$mentorPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Int_Mentor_id: number
      Student_id: number | null
    }, ExtArgs["result"]["internal_mentor"]>
    composites: {}
  }

  type internal_mentorGetPayload<S extends boolean | null | undefined | internal_mentorDefaultArgs> = $Result.GetResult<Prisma.$internal_mentorPayload, S>

  type internal_mentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<internal_mentorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Internal_mentorCountAggregateInputType | true
    }

  export interface internal_mentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['internal_mentor'], meta: { name: 'internal_mentor' } }
    /**
     * Find zero or one Internal_mentor that matches the filter.
     * @param {internal_mentorFindUniqueArgs} args - Arguments to find a Internal_mentor
     * @example
     * // Get one Internal_mentor
     * const internal_mentor = await prisma.internal_mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends internal_mentorFindUniqueArgs>(args: SelectSubset<T, internal_mentorFindUniqueArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Internal_mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {internal_mentorFindUniqueOrThrowArgs} args - Arguments to find a Internal_mentor
     * @example
     * // Get one Internal_mentor
     * const internal_mentor = await prisma.internal_mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends internal_mentorFindUniqueOrThrowArgs>(args: SelectSubset<T, internal_mentorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internal_mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_mentorFindFirstArgs} args - Arguments to find a Internal_mentor
     * @example
     * // Get one Internal_mentor
     * const internal_mentor = await prisma.internal_mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends internal_mentorFindFirstArgs>(args?: SelectSubset<T, internal_mentorFindFirstArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internal_mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_mentorFindFirstOrThrowArgs} args - Arguments to find a Internal_mentor
     * @example
     * // Get one Internal_mentor
     * const internal_mentor = await prisma.internal_mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends internal_mentorFindFirstOrThrowArgs>(args?: SelectSubset<T, internal_mentorFindFirstOrThrowArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Internal_mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_mentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Internal_mentors
     * const internal_mentors = await prisma.internal_mentor.findMany()
     * 
     * // Get first 10 Internal_mentors
     * const internal_mentors = await prisma.internal_mentor.findMany({ take: 10 })
     * 
     * // Only select the `Int_Mentor_id`
     * const internal_mentorWithInt_Mentor_idOnly = await prisma.internal_mentor.findMany({ select: { Int_Mentor_id: true } })
     * 
     */
    findMany<T extends internal_mentorFindManyArgs>(args?: SelectSubset<T, internal_mentorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Internal_mentor.
     * @param {internal_mentorCreateArgs} args - Arguments to create a Internal_mentor.
     * @example
     * // Create one Internal_mentor
     * const Internal_mentor = await prisma.internal_mentor.create({
     *   data: {
     *     // ... data to create a Internal_mentor
     *   }
     * })
     * 
     */
    create<T extends internal_mentorCreateArgs>(args: SelectSubset<T, internal_mentorCreateArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Internal_mentors.
     * @param {internal_mentorCreateManyArgs} args - Arguments to create many Internal_mentors.
     * @example
     * // Create many Internal_mentors
     * const internal_mentor = await prisma.internal_mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends internal_mentorCreateManyArgs>(args?: SelectSubset<T, internal_mentorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Internal_mentor.
     * @param {internal_mentorDeleteArgs} args - Arguments to delete one Internal_mentor.
     * @example
     * // Delete one Internal_mentor
     * const Internal_mentor = await prisma.internal_mentor.delete({
     *   where: {
     *     // ... filter to delete one Internal_mentor
     *   }
     * })
     * 
     */
    delete<T extends internal_mentorDeleteArgs>(args: SelectSubset<T, internal_mentorDeleteArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Internal_mentor.
     * @param {internal_mentorUpdateArgs} args - Arguments to update one Internal_mentor.
     * @example
     * // Update one Internal_mentor
     * const internal_mentor = await prisma.internal_mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends internal_mentorUpdateArgs>(args: SelectSubset<T, internal_mentorUpdateArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Internal_mentors.
     * @param {internal_mentorDeleteManyArgs} args - Arguments to filter Internal_mentors to delete.
     * @example
     * // Delete a few Internal_mentors
     * const { count } = await prisma.internal_mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends internal_mentorDeleteManyArgs>(args?: SelectSubset<T, internal_mentorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internal_mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_mentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Internal_mentors
     * const internal_mentor = await prisma.internal_mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends internal_mentorUpdateManyArgs>(args: SelectSubset<T, internal_mentorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Internal_mentor.
     * @param {internal_mentorUpsertArgs} args - Arguments to update or create a Internal_mentor.
     * @example
     * // Update or create a Internal_mentor
     * const internal_mentor = await prisma.internal_mentor.upsert({
     *   create: {
     *     // ... data to create a Internal_mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Internal_mentor we want to update
     *   }
     * })
     */
    upsert<T extends internal_mentorUpsertArgs>(args: SelectSubset<T, internal_mentorUpsertArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Internal_mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_mentorCountArgs} args - Arguments to filter Internal_mentors to count.
     * @example
     * // Count the number of Internal_mentors
     * const count = await prisma.internal_mentor.count({
     *   where: {
     *     // ... the filter for the Internal_mentors we want to count
     *   }
     * })
    **/
    count<T extends internal_mentorCountArgs>(
      args?: Subset<T, internal_mentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Internal_mentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Internal_mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Internal_mentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Internal_mentorAggregateArgs>(args: Subset<T, Internal_mentorAggregateArgs>): Prisma.PrismaPromise<GetInternal_mentorAggregateType<T>>

    /**
     * Group by Internal_mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_mentorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends internal_mentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: internal_mentorGroupByArgs['orderBy'] }
        : { orderBy?: internal_mentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, internal_mentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternal_mentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the internal_mentor model
   */
  readonly fields: internal_mentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for internal_mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__internal_mentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends mentorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mentorDefaultArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends internal_mentor$studentArgs<ExtArgs> = {}>(args?: Subset<T, internal_mentor$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the internal_mentor model
   */
  interface internal_mentorFieldRefs {
    readonly Int_Mentor_id: FieldRef<"internal_mentor", 'Int'>
    readonly Student_id: FieldRef<"internal_mentor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * internal_mentor findUnique
   */
  export type internal_mentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * Filter, which internal_mentor to fetch.
     */
    where: internal_mentorWhereUniqueInput
  }

  /**
   * internal_mentor findUniqueOrThrow
   */
  export type internal_mentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * Filter, which internal_mentor to fetch.
     */
    where: internal_mentorWhereUniqueInput
  }

  /**
   * internal_mentor findFirst
   */
  export type internal_mentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * Filter, which internal_mentor to fetch.
     */
    where?: internal_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_mentors to fetch.
     */
    orderBy?: internal_mentorOrderByWithRelationInput | internal_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internal_mentors.
     */
    cursor?: internal_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internal_mentors.
     */
    distinct?: Internal_mentorScalarFieldEnum | Internal_mentorScalarFieldEnum[]
  }

  /**
   * internal_mentor findFirstOrThrow
   */
  export type internal_mentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * Filter, which internal_mentor to fetch.
     */
    where?: internal_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_mentors to fetch.
     */
    orderBy?: internal_mentorOrderByWithRelationInput | internal_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internal_mentors.
     */
    cursor?: internal_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internal_mentors.
     */
    distinct?: Internal_mentorScalarFieldEnum | Internal_mentorScalarFieldEnum[]
  }

  /**
   * internal_mentor findMany
   */
  export type internal_mentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * Filter, which internal_mentors to fetch.
     */
    where?: internal_mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_mentors to fetch.
     */
    orderBy?: internal_mentorOrderByWithRelationInput | internal_mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing internal_mentors.
     */
    cursor?: internal_mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_mentors.
     */
    skip?: number
    distinct?: Internal_mentorScalarFieldEnum | Internal_mentorScalarFieldEnum[]
  }

  /**
   * internal_mentor create
   */
  export type internal_mentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * The data needed to create a internal_mentor.
     */
    data: XOR<internal_mentorCreateInput, internal_mentorUncheckedCreateInput>
  }

  /**
   * internal_mentor createMany
   */
  export type internal_mentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many internal_mentors.
     */
    data: internal_mentorCreateManyInput | internal_mentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * internal_mentor update
   */
  export type internal_mentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * The data needed to update a internal_mentor.
     */
    data: XOR<internal_mentorUpdateInput, internal_mentorUncheckedUpdateInput>
    /**
     * Choose, which internal_mentor to update.
     */
    where: internal_mentorWhereUniqueInput
  }

  /**
   * internal_mentor updateMany
   */
  export type internal_mentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update internal_mentors.
     */
    data: XOR<internal_mentorUpdateManyMutationInput, internal_mentorUncheckedUpdateManyInput>
    /**
     * Filter which internal_mentors to update
     */
    where?: internal_mentorWhereInput
    /**
     * Limit how many internal_mentors to update.
     */
    limit?: number
  }

  /**
   * internal_mentor upsert
   */
  export type internal_mentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * The filter to search for the internal_mentor to update in case it exists.
     */
    where: internal_mentorWhereUniqueInput
    /**
     * In case the internal_mentor found by the `where` argument doesn't exist, create a new internal_mentor with this data.
     */
    create: XOR<internal_mentorCreateInput, internal_mentorUncheckedCreateInput>
    /**
     * In case the internal_mentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<internal_mentorUpdateInput, internal_mentorUncheckedUpdateInput>
  }

  /**
   * internal_mentor delete
   */
  export type internal_mentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    /**
     * Filter which internal_mentor to delete.
     */
    where: internal_mentorWhereUniqueInput
  }

  /**
   * internal_mentor deleteMany
   */
  export type internal_mentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internal_mentors to delete
     */
    where?: internal_mentorWhereInput
    /**
     * Limit how many internal_mentors to delete.
     */
    limit?: number
  }

  /**
   * internal_mentor.student
   */
  export type internal_mentor$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * internal_mentor without action
   */
  export type internal_mentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
  }


  /**
   * Model mentor
   */

  export type AggregateMentor = {
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  export type MentorAvgAggregateOutputType = {
    Mentor_id: number | null
  }

  export type MentorSumAggregateOutputType = {
    Mentor_id: number | null
  }

  export type MentorMinAggregateOutputType = {
    Mentor_id: number | null
    Course_id: string | null
  }

  export type MentorMaxAggregateOutputType = {
    Mentor_id: number | null
    Course_id: string | null
  }

  export type MentorCountAggregateOutputType = {
    Mentor_id: number
    Course_id: number
    _all: number
  }


  export type MentorAvgAggregateInputType = {
    Mentor_id?: true
  }

  export type MentorSumAggregateInputType = {
    Mentor_id?: true
  }

  export type MentorMinAggregateInputType = {
    Mentor_id?: true
    Course_id?: true
  }

  export type MentorMaxAggregateInputType = {
    Mentor_id?: true
    Course_id?: true
  }

  export type MentorCountAggregateInputType = {
    Mentor_id?: true
    Course_id?: true
    _all?: true
  }

  export type MentorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mentor to aggregate.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mentors
    **/
    _count?: true | MentorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentorMaxAggregateInputType
  }

  export type GetMentorAggregateType<T extends MentorAggregateArgs> = {
        [P in keyof T & keyof AggregateMentor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentor[P]>
      : GetScalarType<T[P], AggregateMentor[P]>
  }




  export type mentorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mentorWhereInput
    orderBy?: mentorOrderByWithAggregationInput | mentorOrderByWithAggregationInput[]
    by: MentorScalarFieldEnum[] | MentorScalarFieldEnum
    having?: mentorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentorCountAggregateInputType | true
    _avg?: MentorAvgAggregateInputType
    _sum?: MentorSumAggregateInputType
    _min?: MentorMinAggregateInputType
    _max?: MentorMaxAggregateInputType
  }

  export type MentorGroupByOutputType = {
    Mentor_id: number
    Course_id: string | null
    _count: MentorCountAggregateOutputType | null
    _avg: MentorAvgAggregateOutputType | null
    _sum: MentorSumAggregateOutputType | null
    _min: MentorMinAggregateOutputType | null
    _max: MentorMaxAggregateOutputType | null
  }

  type GetMentorGroupByPayload<T extends mentorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentorGroupByOutputType[P]>
            : GetScalarType<T[P], MentorGroupByOutputType[P]>
        }
      >
    >


  export type mentorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Mentor_id?: boolean
    Course_id?: boolean
    external_mentor?: boolean | mentor$external_mentorArgs<ExtArgs>
    internal_mentor?: boolean | mentor$internal_mentorArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    fieldt_course?: boolean | mentor$fieldt_courseArgs<ExtArgs>
  }, ExtArgs["result"]["mentor"]>



  export type mentorSelectScalar = {
    Mentor_id?: boolean
    Course_id?: boolean
  }

  export type mentorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Mentor_id" | "Course_id", ExtArgs["result"]["mentor"]>
  export type mentorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    external_mentor?: boolean | mentor$external_mentorArgs<ExtArgs>
    internal_mentor?: boolean | mentor$internal_mentorArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    fieldt_course?: boolean | mentor$fieldt_courseArgs<ExtArgs>
  }

  export type $mentorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mentor"
    objects: {
      external_mentor: Prisma.$external_mentorPayload<ExtArgs> | null
      internal_mentor: Prisma.$internal_mentorPayload<ExtArgs> | null
      person: Prisma.$personPayload<ExtArgs>
      fieldt_course: Prisma.$fieldt_coursePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Mentor_id: number
      Course_id: string | null
    }, ExtArgs["result"]["mentor"]>
    composites: {}
  }

  type mentorGetPayload<S extends boolean | null | undefined | mentorDefaultArgs> = $Result.GetResult<Prisma.$mentorPayload, S>

  type mentorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mentorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentorCountAggregateInputType | true
    }

  export interface mentorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mentor'], meta: { name: 'mentor' } }
    /**
     * Find zero or one Mentor that matches the filter.
     * @param {mentorFindUniqueArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mentorFindUniqueArgs>(args: SelectSubset<T, mentorFindUniqueArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mentor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mentorFindUniqueOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mentorFindUniqueOrThrowArgs>(args: SelectSubset<T, mentorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorFindFirstArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mentorFindFirstArgs>(args?: SelectSubset<T, mentorFindFirstArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mentor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorFindFirstOrThrowArgs} args - Arguments to find a Mentor
     * @example
     * // Get one Mentor
     * const mentor = await prisma.mentor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mentorFindFirstOrThrowArgs>(args?: SelectSubset<T, mentorFindFirstOrThrowArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mentors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentors
     * const mentors = await prisma.mentor.findMany()
     * 
     * // Get first 10 Mentors
     * const mentors = await prisma.mentor.findMany({ take: 10 })
     * 
     * // Only select the `Mentor_id`
     * const mentorWithMentor_idOnly = await prisma.mentor.findMany({ select: { Mentor_id: true } })
     * 
     */
    findMany<T extends mentorFindManyArgs>(args?: SelectSubset<T, mentorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mentor.
     * @param {mentorCreateArgs} args - Arguments to create a Mentor.
     * @example
     * // Create one Mentor
     * const Mentor = await prisma.mentor.create({
     *   data: {
     *     // ... data to create a Mentor
     *   }
     * })
     * 
     */
    create<T extends mentorCreateArgs>(args: SelectSubset<T, mentorCreateArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mentors.
     * @param {mentorCreateManyArgs} args - Arguments to create many Mentors.
     * @example
     * // Create many Mentors
     * const mentor = await prisma.mentor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mentorCreateManyArgs>(args?: SelectSubset<T, mentorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mentor.
     * @param {mentorDeleteArgs} args - Arguments to delete one Mentor.
     * @example
     * // Delete one Mentor
     * const Mentor = await prisma.mentor.delete({
     *   where: {
     *     // ... filter to delete one Mentor
     *   }
     * })
     * 
     */
    delete<T extends mentorDeleteArgs>(args: SelectSubset<T, mentorDeleteArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mentor.
     * @param {mentorUpdateArgs} args - Arguments to update one Mentor.
     * @example
     * // Update one Mentor
     * const mentor = await prisma.mentor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mentorUpdateArgs>(args: SelectSubset<T, mentorUpdateArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mentors.
     * @param {mentorDeleteManyArgs} args - Arguments to filter Mentors to delete.
     * @example
     * // Delete a few Mentors
     * const { count } = await prisma.mentor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mentorDeleteManyArgs>(args?: SelectSubset<T, mentorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentors
     * const mentor = await prisma.mentor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mentorUpdateManyArgs>(args: SelectSubset<T, mentorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mentor.
     * @param {mentorUpsertArgs} args - Arguments to update or create a Mentor.
     * @example
     * // Update or create a Mentor
     * const mentor = await prisma.mentor.upsert({
     *   create: {
     *     // ... data to create a Mentor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentor we want to update
     *   }
     * })
     */
    upsert<T extends mentorUpsertArgs>(args: SelectSubset<T, mentorUpsertArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mentors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorCountArgs} args - Arguments to filter Mentors to count.
     * @example
     * // Count the number of Mentors
     * const count = await prisma.mentor.count({
     *   where: {
     *     // ... the filter for the Mentors we want to count
     *   }
     * })
    **/
    count<T extends mentorCountArgs>(
      args?: Subset<T, mentorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MentorAggregateArgs>(args: Subset<T, MentorAggregateArgs>): Prisma.PrismaPromise<GetMentorAggregateType<T>>

    /**
     * Group by Mentor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mentorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mentorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mentorGroupByArgs['orderBy'] }
        : { orderBy?: mentorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mentorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mentor model
   */
  readonly fields: mentorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mentor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mentorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    external_mentor<T extends mentor$external_mentorArgs<ExtArgs> = {}>(args?: Subset<T, mentor$external_mentorArgs<ExtArgs>>): Prisma__external_mentorClient<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    internal_mentor<T extends mentor$internal_mentorArgs<ExtArgs> = {}>(args?: Subset<T, mentor$internal_mentorArgs<ExtArgs>>): Prisma__internal_mentorClient<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fieldt_course<T extends mentor$fieldt_courseArgs<ExtArgs> = {}>(args?: Subset<T, mentor$fieldt_courseArgs<ExtArgs>>): Prisma__fieldt_courseClient<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mentor model
   */
  interface mentorFieldRefs {
    readonly Mentor_id: FieldRef<"mentor", 'Int'>
    readonly Course_id: FieldRef<"mentor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mentor findUnique
   */
  export type mentorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor findUniqueOrThrow
   */
  export type mentorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor findFirst
   */
  export type mentorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mentors.
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * mentor findFirstOrThrow
   */
  export type mentorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * Filter, which mentor to fetch.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mentors.
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mentors.
     */
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * mentor findMany
   */
  export type mentorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * Filter, which mentors to fetch.
     */
    where?: mentorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mentors to fetch.
     */
    orderBy?: mentorOrderByWithRelationInput | mentorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mentors.
     */
    cursor?: mentorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mentors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mentors.
     */
    skip?: number
    distinct?: MentorScalarFieldEnum | MentorScalarFieldEnum[]
  }

  /**
   * mentor create
   */
  export type mentorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * The data needed to create a mentor.
     */
    data: XOR<mentorCreateInput, mentorUncheckedCreateInput>
  }

  /**
   * mentor createMany
   */
  export type mentorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mentors.
     */
    data: mentorCreateManyInput | mentorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mentor update
   */
  export type mentorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * The data needed to update a mentor.
     */
    data: XOR<mentorUpdateInput, mentorUncheckedUpdateInput>
    /**
     * Choose, which mentor to update.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor updateMany
   */
  export type mentorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mentors.
     */
    data: XOR<mentorUpdateManyMutationInput, mentorUncheckedUpdateManyInput>
    /**
     * Filter which mentors to update
     */
    where?: mentorWhereInput
    /**
     * Limit how many mentors to update.
     */
    limit?: number
  }

  /**
   * mentor upsert
   */
  export type mentorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * The filter to search for the mentor to update in case it exists.
     */
    where: mentorWhereUniqueInput
    /**
     * In case the mentor found by the `where` argument doesn't exist, create a new mentor with this data.
     */
    create: XOR<mentorCreateInput, mentorUncheckedCreateInput>
    /**
     * In case the mentor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mentorUpdateInput, mentorUncheckedUpdateInput>
  }

  /**
   * mentor delete
   */
  export type mentorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    /**
     * Filter which mentor to delete.
     */
    where: mentorWhereUniqueInput
  }

  /**
   * mentor deleteMany
   */
  export type mentorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mentors to delete
     */
    where?: mentorWhereInput
    /**
     * Limit how many mentors to delete.
     */
    limit?: number
  }

  /**
   * mentor.external_mentor
   */
  export type mentor$external_mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    where?: external_mentorWhereInput
  }

  /**
   * mentor.internal_mentor
   */
  export type mentor$internal_mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    where?: internal_mentorWhereInput
  }

  /**
   * mentor.fieldt_course
   */
  export type mentor$fieldt_courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    where?: fieldt_courseWhereInput
  }

  /**
   * mentor without action
   */
  export type mentorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
  }


  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    Org_id: number | null
    Coordinator_id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    Org_id: number | null
    Coordinator_id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    Org_id: number | null
    Name: string | null
    Contact_info: string | null
    Approval_Status: string | null
    Coordinator_id: number | null
  }

  export type OrganizationMaxAggregateOutputType = {
    Org_id: number | null
    Name: string | null
    Contact_info: string | null
    Approval_Status: string | null
    Coordinator_id: number | null
  }

  export type OrganizationCountAggregateOutputType = {
    Org_id: number
    Name: number
    Contact_info: number
    Approval_Status: number
    Coordinator_id: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    Org_id?: true
    Coordinator_id?: true
  }

  export type OrganizationSumAggregateInputType = {
    Org_id?: true
    Coordinator_id?: true
  }

  export type OrganizationMinAggregateInputType = {
    Org_id?: true
    Name?: true
    Contact_info?: true
    Approval_Status?: true
    Coordinator_id?: true
  }

  export type OrganizationMaxAggregateInputType = {
    Org_id?: true
    Name?: true
    Contact_info?: true
    Approval_Status?: true
    Coordinator_id?: true
  }

  export type OrganizationCountAggregateInputType = {
    Org_id?: true
    Name?: true
    Contact_info?: true
    Approval_Status?: true
    Coordinator_id?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: organizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status: string | null
    Coordinator_id: number | null
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Org_id?: boolean
    Name?: boolean
    Contact_info?: boolean
    Approval_Status?: boolean
    Coordinator_id?: boolean
    external_mentor?: boolean | organization$external_mentorArgs<ExtArgs>
    fieldt_course?: boolean | organization$fieldt_courseArgs<ExtArgs>
    coordinator?: boolean | organization$coordinatorArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type organizationSelectScalar = {
    Org_id?: boolean
    Name?: boolean
    Contact_info?: boolean
    Approval_Status?: boolean
    Coordinator_id?: boolean
  }

  export type organizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Org_id" | "Name" | "Contact_info" | "Approval_Status" | "Coordinator_id", ExtArgs["result"]["organization"]>
  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    external_mentor?: boolean | organization$external_mentorArgs<ExtArgs>
    fieldt_course?: boolean | organization$fieldt_courseArgs<ExtArgs>
    coordinator?: boolean | organization$coordinatorArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "organization"
    objects: {
      external_mentor: Prisma.$external_mentorPayload<ExtArgs>[]
      fieldt_course: Prisma.$fieldt_coursePayload<ExtArgs>[]
      coordinator: Prisma.$coordinatorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Org_id: number
      Name: string
      Contact_info: string
      Approval_Status: string | null
      Coordinator_id: number | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<Prisma.$organizationPayload, S>

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<organizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization'], meta: { name: 'organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends organizationFindUniqueArgs>(args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs>(args: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends organizationFindFirstArgs>(args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs>(args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `Org_id`
     * const organizationWithOrg_idOnly = await prisma.organization.findMany({ select: { Org_id: true } })
     * 
     */
    findMany<T extends organizationFindManyArgs>(args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends organizationCreateArgs>(args: SelectSubset<T, organizationCreateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends organizationCreateManyArgs>(args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends organizationDeleteArgs>(args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends organizationUpdateArgs>(args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends organizationDeleteManyArgs>(args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends organizationUpdateManyArgs>(args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends organizationUpsertArgs>(args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the organization model
   */
  readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    external_mentor<T extends organization$external_mentorArgs<ExtArgs> = {}>(args?: Subset<T, organization$external_mentorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$external_mentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fieldt_course<T extends organization$fieldt_courseArgs<ExtArgs> = {}>(args?: Subset<T, organization$fieldt_courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fieldt_coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coordinator<T extends organization$coordinatorArgs<ExtArgs> = {}>(args?: Subset<T, organization$coordinatorArgs<ExtArgs>>): Prisma__coordinatorClient<$Result.GetResult<Prisma.$coordinatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly Org_id: FieldRef<"organization", 'Int'>
    readonly Name: FieldRef<"organization", 'String'>
    readonly Contact_info: FieldRef<"organization", 'String'>
    readonly Approval_Status: FieldRef<"organization", 'String'>
    readonly Coordinator_id: FieldRef<"organization", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>
  }

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to update.
     */
    limit?: number
  }

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>
  }

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput
  }

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput
    /**
     * Limit how many organizations to delete.
     */
    limit?: number
  }

  /**
   * organization.external_mentor
   */
  export type organization$external_mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the external_mentor
     */
    select?: external_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the external_mentor
     */
    omit?: external_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: external_mentorInclude<ExtArgs> | null
    where?: external_mentorWhereInput
    orderBy?: external_mentorOrderByWithRelationInput | external_mentorOrderByWithRelationInput[]
    cursor?: external_mentorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: External_mentorScalarFieldEnum | External_mentorScalarFieldEnum[]
  }

  /**
   * organization.fieldt_course
   */
  export type organization$fieldt_courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fieldt_course
     */
    select?: fieldt_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fieldt_course
     */
    omit?: fieldt_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fieldt_courseInclude<ExtArgs> | null
    where?: fieldt_courseWhereInput
    orderBy?: fieldt_courseOrderByWithRelationInput | fieldt_courseOrderByWithRelationInput[]
    cursor?: fieldt_courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fieldt_courseScalarFieldEnum | Fieldt_courseScalarFieldEnum[]
  }

  /**
   * organization.coordinator
   */
  export type organization$coordinatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the coordinator
     */
    select?: coordinatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the coordinator
     */
    omit?: coordinatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: coordinatorInclude<ExtArgs> | null
    where?: coordinatorWhereInput
  }

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the organization
     */
    omit?: organizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: organizationInclude<ExtArgs> | null
  }


  /**
   * Model person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    Person_id: number | null
  }

  export type PersonSumAggregateOutputType = {
    Person_id: number | null
  }

  export type PersonMinAggregateOutputType = {
    Person_id: number | null
    Name: string | null
    Email: string | null
    Sex: string | null
  }

  export type PersonMaxAggregateOutputType = {
    Person_id: number | null
    Name: string | null
    Email: string | null
    Sex: string | null
  }

  export type PersonCountAggregateOutputType = {
    Person_id: number
    Name: number
    Email: number
    Sex: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    Person_id?: true
  }

  export type PersonSumAggregateInputType = {
    Person_id?: true
  }

  export type PersonMinAggregateInputType = {
    Person_id?: true
    Name?: true
    Email?: true
    Sex?: true
  }

  export type PersonMaxAggregateInputType = {
    Person_id?: true
    Name?: true
    Email?: true
    Sex?: true
  }

  export type PersonCountAggregateInputType = {
    Person_id?: true
    Name?: true
    Email?: true
    Sex?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which person to aggregate.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type personGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personWhereInput
    orderBy?: personOrderByWithAggregationInput | personOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: personScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    Person_id: number
    Name: string
    Email: string | null
    Sex: string | null
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends personGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type personSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Person_id?: boolean
    Name?: boolean
    Email?: boolean
    Sex?: boolean
    employee?: boolean | person$employeeArgs<ExtArgs>
    mentor?: boolean | person$mentorArgs<ExtArgs>
    student?: boolean | person$studentArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>



  export type personSelectScalar = {
    Person_id?: boolean
    Name?: boolean
    Email?: boolean
    Sex?: boolean
  }

  export type personOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Person_id" | "Name" | "Email" | "Sex", ExtArgs["result"]["person"]>
  export type personInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | person$employeeArgs<ExtArgs>
    mentor?: boolean | person$mentorArgs<ExtArgs>
    student?: boolean | person$studentArgs<ExtArgs>
  }

  export type $personPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "person"
    objects: {
      employee: Prisma.$employeePayload<ExtArgs> | null
      mentor: Prisma.$mentorPayload<ExtArgs> | null
      student: Prisma.$studentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Person_id: number
      Name: string
      Email: string | null
      Sex: string | null
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type personGetPayload<S extends boolean | null | undefined | personDefaultArgs> = $Result.GetResult<Prisma.$personPayload, S>

  type personCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface personDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['person'], meta: { name: 'person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {personFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personFindUniqueArgs>(args: SelectSubset<T, personFindUniqueArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personFindUniqueOrThrowArgs>(args: SelectSubset<T, personFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personFindFirstArgs>(args?: SelectSubset<T, personFindFirstArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personFindFirstOrThrowArgs>(args?: SelectSubset<T, personFindFirstOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `Person_id`
     * const personWithPerson_idOnly = await prisma.person.findMany({ select: { Person_id: true } })
     * 
     */
    findMany<T extends personFindManyArgs>(args?: SelectSubset<T, personFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {personCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends personCreateArgs>(args: SelectSubset<T, personCreateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {personCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personCreateManyArgs>(args?: SelectSubset<T, personCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {personDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends personDeleteArgs>(args: SelectSubset<T, personDeleteArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {personUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personUpdateArgs>(args: SelectSubset<T, personUpdateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {personDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personDeleteManyArgs>(args?: SelectSubset<T, personDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personUpdateManyArgs>(args: SelectSubset<T, personUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {personUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends personUpsertArgs>(args: SelectSubset<T, personUpsertArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends personCountArgs>(
      args?: Subset<T, personCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends personGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personGroupByArgs['orderBy'] }
        : { orderBy?: personGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, personGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the person model
   */
  readonly fields: personFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends person$employeeArgs<ExtArgs> = {}>(args?: Subset<T, person$employeeArgs<ExtArgs>>): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentor<T extends person$mentorArgs<ExtArgs> = {}>(args?: Subset<T, person$mentorArgs<ExtArgs>>): Prisma__mentorClient<$Result.GetResult<Prisma.$mentorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends person$studentArgs<ExtArgs> = {}>(args?: Subset<T, person$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the person model
   */
  interface personFieldRefs {
    readonly Person_id: FieldRef<"person", 'Int'>
    readonly Name: FieldRef<"person", 'String'>
    readonly Email: FieldRef<"person", 'String'>
    readonly Sex: FieldRef<"person", 'String'>
  }
    

  // Custom InputTypes
  /**
   * person findUnique
   */
  export type personFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findUniqueOrThrow
   */
  export type personFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findFirst
   */
  export type personFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findFirstOrThrow
   */
  export type personFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findMany
   */
  export type personFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person create
   */
  export type personCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to create a person.
     */
    data: XOR<personCreateInput, personUncheckedCreateInput>
  }

  /**
   * person createMany
   */
  export type personCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * person update
   */
  export type personUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to update a person.
     */
    data: XOR<personUpdateInput, personUncheckedUpdateInput>
    /**
     * Choose, which person to update.
     */
    where: personWhereUniqueInput
  }

  /**
   * person updateMany
   */
  export type personUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * person upsert
   */
  export type personUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The filter to search for the person to update in case it exists.
     */
    where: personWhereUniqueInput
    /**
     * In case the person found by the `where` argument doesn't exist, create a new person with this data.
     */
    create: XOR<personCreateInput, personUncheckedCreateInput>
    /**
     * In case the person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personUpdateInput, personUncheckedUpdateInput>
  }

  /**
   * person delete
   */
  export type personDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter which person to delete.
     */
    where: personWhereUniqueInput
  }

  /**
   * person deleteMany
   */
  export type personDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to delete
     */
    where?: personWhereInput
    /**
     * Limit how many people to delete.
     */
    limit?: number
  }

  /**
   * person.employee
   */
  export type person$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee
     */
    omit?: employeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeeInclude<ExtArgs> | null
    where?: employeeWhereInput
  }

  /**
   * person.mentor
   */
  export type person$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mentor
     */
    select?: mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mentor
     */
    omit?: mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mentorInclude<ExtArgs> | null
    where?: mentorWhereInput
  }

  /**
   * person.student
   */
  export type person$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * person without action
   */
  export type personDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    Student_id: number | null
    Evaluation_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    Student_id: number | null
    Evaluation_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    Student_id: number | null
    Level: string | null
    Major_Dept: string | null
    Evaluation_id: number | null
  }

  export type StudentMaxAggregateOutputType = {
    Student_id: number | null
    Level: string | null
    Major_Dept: string | null
    Evaluation_id: number | null
  }

  export type StudentCountAggregateOutputType = {
    Student_id: number
    Level: number
    Major_Dept: number
    Evaluation_id: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    Student_id?: true
    Evaluation_id?: true
  }

  export type StudentSumAggregateInputType = {
    Student_id?: true
    Evaluation_id?: true
  }

  export type StudentMinAggregateInputType = {
    Student_id?: true
    Level?: true
    Major_Dept?: true
    Evaluation_id?: true
  }

  export type StudentMaxAggregateInputType = {
    Student_id?: true
    Level?: true
    Major_Dept?: true
    Evaluation_id?: true
  }

  export type StudentCountAggregateInputType = {
    Student_id?: true
    Level?: true
    Major_Dept?: true
    Evaluation_id?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    Student_id: number
    Level: string | null
    Major_Dept: string
    Evaluation_id: number | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Student_id?: boolean
    Level?: boolean
    Major_Dept?: boolean
    Evaluation_id?: boolean
    enroll?: boolean | student$enrollArgs<ExtArgs>
    enrollment?: boolean | student$enrollmentArgs<ExtArgs>
    internal_mentor?: boolean | student$internal_mentorArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type studentSelectScalar = {
    Student_id?: boolean
    Level?: boolean
    Major_Dept?: boolean
    Evaluation_id?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Student_id" | "Level" | "Major_Dept" | "Evaluation_id", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enroll?: boolean | student$enrollArgs<ExtArgs>
    enrollment?: boolean | student$enrollmentArgs<ExtArgs>
    internal_mentor?: boolean | student$internal_mentorArgs<ExtArgs>
    person?: boolean | personDefaultArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      enroll: Prisma.$enrollPayload<ExtArgs>[]
      enrollment: Prisma.$enrollmentPayload<ExtArgs>[]
      internal_mentor: Prisma.$internal_mentorPayload<ExtArgs>[]
      person: Prisma.$personPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Student_id: number
      Level: string | null
      Major_Dept: string
      Evaluation_id: number | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `Student_id`
     * const studentWithStudent_idOnly = await prisma.student.findMany({ select: { Student_id: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enroll<T extends student$enrollArgs<ExtArgs> = {}>(args?: Subset<T, student$enrollArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollment<T extends student$enrollmentArgs<ExtArgs> = {}>(args?: Subset<T, student$enrollmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    internal_mentor<T extends student$internal_mentorArgs<ExtArgs> = {}>(args?: Subset<T, student$internal_mentorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internal_mentorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    person<T extends personDefaultArgs<ExtArgs> = {}>(args?: Subset<T, personDefaultArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly Student_id: FieldRef<"student", 'Int'>
    readonly Level: FieldRef<"student", 'String'>
    readonly Major_Dept: FieldRef<"student", 'String'>
    readonly Evaluation_id: FieldRef<"student", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.enroll
   */
  export type student$enrollArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enroll
     */
    select?: enrollSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enroll
     */
    omit?: enrollOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollInclude<ExtArgs> | null
    where?: enrollWhereInput
    orderBy?: enrollOrderByWithRelationInput | enrollOrderByWithRelationInput[]
    cursor?: enrollWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollScalarFieldEnum | EnrollScalarFieldEnum[]
  }

  /**
   * student.enrollment
   */
  export type student$enrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    cursor?: enrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * student.internal_mentor
   */
  export type student$internal_mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_mentor
     */
    select?: internal_mentorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_mentor
     */
    omit?: internal_mentorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internal_mentorInclude<ExtArgs> | null
    where?: internal_mentorWhereInput
    orderBy?: internal_mentorOrderByWithRelationInput | internal_mentorOrderByWithRelationInput[]
    cursor?: internal_mentorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Internal_mentorScalarFieldEnum | Internal_mentorScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CoordinatorScalarFieldEnum: {
    Coordinator_id: 'Coordinator_id',
    Name: 'Name'
  };

  export type CoordinatorScalarFieldEnum = (typeof CoordinatorScalarFieldEnum)[keyof typeof CoordinatorScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    Employee_id: 'Employee_id',
    Salary: 'Salary',
    Position: 'Position'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const EnrollScalarFieldEnum: {
    Student_id: 'Student_id',
    Course_id: 'Course_id'
  };

  export type EnrollScalarFieldEnum = (typeof EnrollScalarFieldEnum)[keyof typeof EnrollScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    Enrollment_id: 'Enrollment_id',
    Student_id: 'Student_id',
    Course_id: 'Course_id',
    Semester: 'Semester',
    Final_grade: 'Final_grade',
    Coordinator_id: 'Coordinator_id'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    Evaluation_id: 'Evaluation_id',
    Grade: 'Grade'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const External_mentorScalarFieldEnum: {
    Ext_Mentor_id: 'Ext_Mentor_id',
    Org_id: 'Org_id'
  };

  export type External_mentorScalarFieldEnum = (typeof External_mentorScalarFieldEnum)[keyof typeof External_mentorScalarFieldEnum]


  export const Fieldt_courseScalarFieldEnum: {
    Course_id: 'Course_id',
    Name: 'Name',
    Duration: 'Duration',
    Org_id: 'Org_id'
  };

  export type Fieldt_courseScalarFieldEnum = (typeof Fieldt_courseScalarFieldEnum)[keyof typeof Fieldt_courseScalarFieldEnum]


  export const Internal_mentorScalarFieldEnum: {
    Int_Mentor_id: 'Int_Mentor_id',
    Student_id: 'Student_id'
  };

  export type Internal_mentorScalarFieldEnum = (typeof Internal_mentorScalarFieldEnum)[keyof typeof Internal_mentorScalarFieldEnum]


  export const MentorScalarFieldEnum: {
    Mentor_id: 'Mentor_id',
    Course_id: 'Course_id'
  };

  export type MentorScalarFieldEnum = (typeof MentorScalarFieldEnum)[keyof typeof MentorScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    Org_id: 'Org_id',
    Name: 'Name',
    Contact_info: 'Contact_info',
    Approval_Status: 'Approval_Status',
    Coordinator_id: 'Coordinator_id'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    Person_id: 'Person_id',
    Name: 'Name',
    Email: 'Email',
    Sex: 'Sex'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    Student_id: 'Student_id',
    Level: 'Level',
    Major_Dept: 'Major_Dept',
    Evaluation_id: 'Evaluation_id'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const coordinatorOrderByRelevanceFieldEnum: {
    Name: 'Name'
  };

  export type coordinatorOrderByRelevanceFieldEnum = (typeof coordinatorOrderByRelevanceFieldEnum)[keyof typeof coordinatorOrderByRelevanceFieldEnum]


  export const employeeOrderByRelevanceFieldEnum: {
    Position: 'Position'
  };

  export type employeeOrderByRelevanceFieldEnum = (typeof employeeOrderByRelevanceFieldEnum)[keyof typeof employeeOrderByRelevanceFieldEnum]


  export const enrollOrderByRelevanceFieldEnum: {
    Course_id: 'Course_id'
  };

  export type enrollOrderByRelevanceFieldEnum = (typeof enrollOrderByRelevanceFieldEnum)[keyof typeof enrollOrderByRelevanceFieldEnum]


  export const enrollmentOrderByRelevanceFieldEnum: {
    Course_id: 'Course_id',
    Semester: 'Semester',
    Final_grade: 'Final_grade'
  };

  export type enrollmentOrderByRelevanceFieldEnum = (typeof enrollmentOrderByRelevanceFieldEnum)[keyof typeof enrollmentOrderByRelevanceFieldEnum]


  export const evaluationOrderByRelevanceFieldEnum: {
    Grade: 'Grade'
  };

  export type evaluationOrderByRelevanceFieldEnum = (typeof evaluationOrderByRelevanceFieldEnum)[keyof typeof evaluationOrderByRelevanceFieldEnum]


  export const fieldt_courseOrderByRelevanceFieldEnum: {
    Course_id: 'Course_id',
    Name: 'Name',
    Duration: 'Duration'
  };

  export type fieldt_courseOrderByRelevanceFieldEnum = (typeof fieldt_courseOrderByRelevanceFieldEnum)[keyof typeof fieldt_courseOrderByRelevanceFieldEnum]


  export const mentorOrderByRelevanceFieldEnum: {
    Course_id: 'Course_id'
  };

  export type mentorOrderByRelevanceFieldEnum = (typeof mentorOrderByRelevanceFieldEnum)[keyof typeof mentorOrderByRelevanceFieldEnum]


  export const organizationOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Contact_info: 'Contact_info',
    Approval_Status: 'Approval_Status'
  };

  export type organizationOrderByRelevanceFieldEnum = (typeof organizationOrderByRelevanceFieldEnum)[keyof typeof organizationOrderByRelevanceFieldEnum]


  export const personOrderByRelevanceFieldEnum: {
    Name: 'Name',
    Email: 'Email',
    Sex: 'Sex'
  };

  export type personOrderByRelevanceFieldEnum = (typeof personOrderByRelevanceFieldEnum)[keyof typeof personOrderByRelevanceFieldEnum]


  export const studentOrderByRelevanceFieldEnum: {
    Level: 'Level',
    Major_Dept: 'Major_Dept'
  };

  export type studentOrderByRelevanceFieldEnum = (typeof studentOrderByRelevanceFieldEnum)[keyof typeof studentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type coordinatorWhereInput = {
    AND?: coordinatorWhereInput | coordinatorWhereInput[]
    OR?: coordinatorWhereInput[]
    NOT?: coordinatorWhereInput | coordinatorWhereInput[]
    Coordinator_id?: IntFilter<"coordinator"> | number
    Name?: StringNullableFilter<"coordinator"> | string | null
    enrollment?: EnrollmentListRelationFilter
    organization?: OrganizationListRelationFilter
  }

  export type coordinatorOrderByWithRelationInput = {
    Coordinator_id?: SortOrder
    Name?: SortOrderInput | SortOrder
    enrollment?: enrollmentOrderByRelationAggregateInput
    organization?: organizationOrderByRelationAggregateInput
    _relevance?: coordinatorOrderByRelevanceInput
  }

  export type coordinatorWhereUniqueInput = Prisma.AtLeast<{
    Coordinator_id?: number
    AND?: coordinatorWhereInput | coordinatorWhereInput[]
    OR?: coordinatorWhereInput[]
    NOT?: coordinatorWhereInput | coordinatorWhereInput[]
    Name?: StringNullableFilter<"coordinator"> | string | null
    enrollment?: EnrollmentListRelationFilter
    organization?: OrganizationListRelationFilter
  }, "Coordinator_id">

  export type coordinatorOrderByWithAggregationInput = {
    Coordinator_id?: SortOrder
    Name?: SortOrderInput | SortOrder
    _count?: coordinatorCountOrderByAggregateInput
    _avg?: coordinatorAvgOrderByAggregateInput
    _max?: coordinatorMaxOrderByAggregateInput
    _min?: coordinatorMinOrderByAggregateInput
    _sum?: coordinatorSumOrderByAggregateInput
  }

  export type coordinatorScalarWhereWithAggregatesInput = {
    AND?: coordinatorScalarWhereWithAggregatesInput | coordinatorScalarWhereWithAggregatesInput[]
    OR?: coordinatorScalarWhereWithAggregatesInput[]
    NOT?: coordinatorScalarWhereWithAggregatesInput | coordinatorScalarWhereWithAggregatesInput[]
    Coordinator_id?: IntWithAggregatesFilter<"coordinator"> | number
    Name?: StringNullableWithAggregatesFilter<"coordinator"> | string | null
  }

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    Employee_id?: IntFilter<"employee"> | number
    Salary?: IntNullableFilter<"employee"> | number | null
    Position?: StringFilter<"employee"> | string
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }

  export type employeeOrderByWithRelationInput = {
    Employee_id?: SortOrder
    Salary?: SortOrderInput | SortOrder
    Position?: SortOrder
    person?: personOrderByWithRelationInput
    _relevance?: employeeOrderByRelevanceInput
  }

  export type employeeWhereUniqueInput = Prisma.AtLeast<{
    Employee_id?: number
    AND?: employeeWhereInput | employeeWhereInput[]
    OR?: employeeWhereInput[]
    NOT?: employeeWhereInput | employeeWhereInput[]
    Salary?: IntNullableFilter<"employee"> | number | null
    Position?: StringFilter<"employee"> | string
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }, "Employee_id">

  export type employeeOrderByWithAggregationInput = {
    Employee_id?: SortOrder
    Salary?: SortOrderInput | SortOrder
    Position?: SortOrder
    _count?: employeeCountOrderByAggregateInput
    _avg?: employeeAvgOrderByAggregateInput
    _max?: employeeMaxOrderByAggregateInput
    _min?: employeeMinOrderByAggregateInput
    _sum?: employeeSumOrderByAggregateInput
  }

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    OR?: employeeScalarWhereWithAggregatesInput[]
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[]
    Employee_id?: IntWithAggregatesFilter<"employee"> | number
    Salary?: IntNullableWithAggregatesFilter<"employee"> | number | null
    Position?: StringWithAggregatesFilter<"employee"> | string
  }

  export type enrollWhereInput = {
    AND?: enrollWhereInput | enrollWhereInput[]
    OR?: enrollWhereInput[]
    NOT?: enrollWhereInput | enrollWhereInput[]
    Student_id?: IntFilter<"enroll"> | number
    Course_id?: StringFilter<"enroll"> | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    fieldt_course?: XOR<Fieldt_courseScalarRelationFilter, fieldt_courseWhereInput>
  }

  export type enrollOrderByWithRelationInput = {
    Student_id?: SortOrder
    Course_id?: SortOrder
    student?: studentOrderByWithRelationInput
    fieldt_course?: fieldt_courseOrderByWithRelationInput
    _relevance?: enrollOrderByRelevanceInput
  }

  export type enrollWhereUniqueInput = Prisma.AtLeast<{
    Student_id_Course_id?: enrollStudent_idCourse_idCompoundUniqueInput
    AND?: enrollWhereInput | enrollWhereInput[]
    OR?: enrollWhereInput[]
    NOT?: enrollWhereInput | enrollWhereInput[]
    Student_id?: IntFilter<"enroll"> | number
    Course_id?: StringFilter<"enroll"> | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    fieldt_course?: XOR<Fieldt_courseScalarRelationFilter, fieldt_courseWhereInput>
  }, "Student_id_Course_id">

  export type enrollOrderByWithAggregationInput = {
    Student_id?: SortOrder
    Course_id?: SortOrder
    _count?: enrollCountOrderByAggregateInput
    _avg?: enrollAvgOrderByAggregateInput
    _max?: enrollMaxOrderByAggregateInput
    _min?: enrollMinOrderByAggregateInput
    _sum?: enrollSumOrderByAggregateInput
  }

  export type enrollScalarWhereWithAggregatesInput = {
    AND?: enrollScalarWhereWithAggregatesInput | enrollScalarWhereWithAggregatesInput[]
    OR?: enrollScalarWhereWithAggregatesInput[]
    NOT?: enrollScalarWhereWithAggregatesInput | enrollScalarWhereWithAggregatesInput[]
    Student_id?: IntWithAggregatesFilter<"enroll"> | number
    Course_id?: StringWithAggregatesFilter<"enroll"> | string
  }

  export type enrollmentWhereInput = {
    AND?: enrollmentWhereInput | enrollmentWhereInput[]
    OR?: enrollmentWhereInput[]
    NOT?: enrollmentWhereInput | enrollmentWhereInput[]
    Enrollment_id?: IntFilter<"enrollment"> | number
    Student_id?: IntNullableFilter<"enrollment"> | number | null
    Course_id?: StringNullableFilter<"enrollment"> | string | null
    Semester?: StringNullableFilter<"enrollment"> | string | null
    Final_grade?: StringNullableFilter<"enrollment"> | string | null
    Coordinator_id?: IntNullableFilter<"enrollment"> | number | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    fieldt_course?: XOR<Fieldt_courseNullableScalarRelationFilter, fieldt_courseWhereInput> | null
    coordinator?: XOR<CoordinatorNullableScalarRelationFilter, coordinatorWhereInput> | null
  }

  export type enrollmentOrderByWithRelationInput = {
    Enrollment_id?: SortOrder
    Student_id?: SortOrderInput | SortOrder
    Course_id?: SortOrderInput | SortOrder
    Semester?: SortOrderInput | SortOrder
    Final_grade?: SortOrderInput | SortOrder
    Coordinator_id?: SortOrderInput | SortOrder
    student?: studentOrderByWithRelationInput
    fieldt_course?: fieldt_courseOrderByWithRelationInput
    coordinator?: coordinatorOrderByWithRelationInput
    _relevance?: enrollmentOrderByRelevanceInput
  }

  export type enrollmentWhereUniqueInput = Prisma.AtLeast<{
    Enrollment_id?: number
    Student_id_Course_id_Semester?: enrollmentStudent_idCourse_idSemesterCompoundUniqueInput
    AND?: enrollmentWhereInput | enrollmentWhereInput[]
    OR?: enrollmentWhereInput[]
    NOT?: enrollmentWhereInput | enrollmentWhereInput[]
    Student_id?: IntNullableFilter<"enrollment"> | number | null
    Course_id?: StringNullableFilter<"enrollment"> | string | null
    Semester?: StringNullableFilter<"enrollment"> | string | null
    Final_grade?: StringNullableFilter<"enrollment"> | string | null
    Coordinator_id?: IntNullableFilter<"enrollment"> | number | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    fieldt_course?: XOR<Fieldt_courseNullableScalarRelationFilter, fieldt_courseWhereInput> | null
    coordinator?: XOR<CoordinatorNullableScalarRelationFilter, coordinatorWhereInput> | null
  }, "Enrollment_id" | "Student_id_Course_id_Semester">

  export type enrollmentOrderByWithAggregationInput = {
    Enrollment_id?: SortOrder
    Student_id?: SortOrderInput | SortOrder
    Course_id?: SortOrderInput | SortOrder
    Semester?: SortOrderInput | SortOrder
    Final_grade?: SortOrderInput | SortOrder
    Coordinator_id?: SortOrderInput | SortOrder
    _count?: enrollmentCountOrderByAggregateInput
    _avg?: enrollmentAvgOrderByAggregateInput
    _max?: enrollmentMaxOrderByAggregateInput
    _min?: enrollmentMinOrderByAggregateInput
    _sum?: enrollmentSumOrderByAggregateInput
  }

  export type enrollmentScalarWhereWithAggregatesInput = {
    AND?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[]
    OR?: enrollmentScalarWhereWithAggregatesInput[]
    NOT?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[]
    Enrollment_id?: IntWithAggregatesFilter<"enrollment"> | number
    Student_id?: IntNullableWithAggregatesFilter<"enrollment"> | number | null
    Course_id?: StringNullableWithAggregatesFilter<"enrollment"> | string | null
    Semester?: StringNullableWithAggregatesFilter<"enrollment"> | string | null
    Final_grade?: StringNullableWithAggregatesFilter<"enrollment"> | string | null
    Coordinator_id?: IntNullableWithAggregatesFilter<"enrollment"> | number | null
  }

  export type evaluationWhereInput = {
    AND?: evaluationWhereInput | evaluationWhereInput[]
    OR?: evaluationWhereInput[]
    NOT?: evaluationWhereInput | evaluationWhereInput[]
    Evaluation_id?: IntFilter<"evaluation"> | number
    Grade?: StringNullableFilter<"evaluation"> | string | null
  }

  export type evaluationOrderByWithRelationInput = {
    Evaluation_id?: SortOrder
    Grade?: SortOrderInput | SortOrder
    _relevance?: evaluationOrderByRelevanceInput
  }

  export type evaluationWhereUniqueInput = Prisma.AtLeast<{
    Evaluation_id?: number
    AND?: evaluationWhereInput | evaluationWhereInput[]
    OR?: evaluationWhereInput[]
    NOT?: evaluationWhereInput | evaluationWhereInput[]
    Grade?: StringNullableFilter<"evaluation"> | string | null
  }, "Evaluation_id">

  export type evaluationOrderByWithAggregationInput = {
    Evaluation_id?: SortOrder
    Grade?: SortOrderInput | SortOrder
    _count?: evaluationCountOrderByAggregateInput
    _avg?: evaluationAvgOrderByAggregateInput
    _max?: evaluationMaxOrderByAggregateInput
    _min?: evaluationMinOrderByAggregateInput
    _sum?: evaluationSumOrderByAggregateInput
  }

  export type evaluationScalarWhereWithAggregatesInput = {
    AND?: evaluationScalarWhereWithAggregatesInput | evaluationScalarWhereWithAggregatesInput[]
    OR?: evaluationScalarWhereWithAggregatesInput[]
    NOT?: evaluationScalarWhereWithAggregatesInput | evaluationScalarWhereWithAggregatesInput[]
    Evaluation_id?: IntWithAggregatesFilter<"evaluation"> | number
    Grade?: StringNullableWithAggregatesFilter<"evaluation"> | string | null
  }

  export type external_mentorWhereInput = {
    AND?: external_mentorWhereInput | external_mentorWhereInput[]
    OR?: external_mentorWhereInput[]
    NOT?: external_mentorWhereInput | external_mentorWhereInput[]
    Ext_Mentor_id?: IntFilter<"external_mentor"> | number
    Org_id?: IntNullableFilter<"external_mentor"> | number | null
    mentor?: XOR<MentorScalarRelationFilter, mentorWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, organizationWhereInput> | null
  }

  export type external_mentorOrderByWithRelationInput = {
    Ext_Mentor_id?: SortOrder
    Org_id?: SortOrderInput | SortOrder
    mentor?: mentorOrderByWithRelationInput
    organization?: organizationOrderByWithRelationInput
  }

  export type external_mentorWhereUniqueInput = Prisma.AtLeast<{
    Ext_Mentor_id?: number
    AND?: external_mentorWhereInput | external_mentorWhereInput[]
    OR?: external_mentorWhereInput[]
    NOT?: external_mentorWhereInput | external_mentorWhereInput[]
    Org_id?: IntNullableFilter<"external_mentor"> | number | null
    mentor?: XOR<MentorScalarRelationFilter, mentorWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, organizationWhereInput> | null
  }, "Ext_Mentor_id">

  export type external_mentorOrderByWithAggregationInput = {
    Ext_Mentor_id?: SortOrder
    Org_id?: SortOrderInput | SortOrder
    _count?: external_mentorCountOrderByAggregateInput
    _avg?: external_mentorAvgOrderByAggregateInput
    _max?: external_mentorMaxOrderByAggregateInput
    _min?: external_mentorMinOrderByAggregateInput
    _sum?: external_mentorSumOrderByAggregateInput
  }

  export type external_mentorScalarWhereWithAggregatesInput = {
    AND?: external_mentorScalarWhereWithAggregatesInput | external_mentorScalarWhereWithAggregatesInput[]
    OR?: external_mentorScalarWhereWithAggregatesInput[]
    NOT?: external_mentorScalarWhereWithAggregatesInput | external_mentorScalarWhereWithAggregatesInput[]
    Ext_Mentor_id?: IntWithAggregatesFilter<"external_mentor"> | number
    Org_id?: IntNullableWithAggregatesFilter<"external_mentor"> | number | null
  }

  export type fieldt_courseWhereInput = {
    AND?: fieldt_courseWhereInput | fieldt_courseWhereInput[]
    OR?: fieldt_courseWhereInput[]
    NOT?: fieldt_courseWhereInput | fieldt_courseWhereInput[]
    Course_id?: StringFilter<"fieldt_course"> | string
    Name?: StringFilter<"fieldt_course"> | string
    Duration?: StringFilter<"fieldt_course"> | string
    Org_id?: IntNullableFilter<"fieldt_course"> | number | null
    enroll?: EnrollListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, organizationWhereInput> | null
    mentor?: MentorListRelationFilter
  }

  export type fieldt_courseOrderByWithRelationInput = {
    Course_id?: SortOrder
    Name?: SortOrder
    Duration?: SortOrder
    Org_id?: SortOrderInput | SortOrder
    enroll?: enrollOrderByRelationAggregateInput
    enrollment?: enrollmentOrderByRelationAggregateInput
    organization?: organizationOrderByWithRelationInput
    mentor?: mentorOrderByRelationAggregateInput
    _relevance?: fieldt_courseOrderByRelevanceInput
  }

  export type fieldt_courseWhereUniqueInput = Prisma.AtLeast<{
    Course_id?: string
    AND?: fieldt_courseWhereInput | fieldt_courseWhereInput[]
    OR?: fieldt_courseWhereInput[]
    NOT?: fieldt_courseWhereInput | fieldt_courseWhereInput[]
    Name?: StringFilter<"fieldt_course"> | string
    Duration?: StringFilter<"fieldt_course"> | string
    Org_id?: IntNullableFilter<"fieldt_course"> | number | null
    enroll?: EnrollListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    organization?: XOR<OrganizationNullableScalarRelationFilter, organizationWhereInput> | null
    mentor?: MentorListRelationFilter
  }, "Course_id">

  export type fieldt_courseOrderByWithAggregationInput = {
    Course_id?: SortOrder
    Name?: SortOrder
    Duration?: SortOrder
    Org_id?: SortOrderInput | SortOrder
    _count?: fieldt_courseCountOrderByAggregateInput
    _avg?: fieldt_courseAvgOrderByAggregateInput
    _max?: fieldt_courseMaxOrderByAggregateInput
    _min?: fieldt_courseMinOrderByAggregateInput
    _sum?: fieldt_courseSumOrderByAggregateInput
  }

  export type fieldt_courseScalarWhereWithAggregatesInput = {
    AND?: fieldt_courseScalarWhereWithAggregatesInput | fieldt_courseScalarWhereWithAggregatesInput[]
    OR?: fieldt_courseScalarWhereWithAggregatesInput[]
    NOT?: fieldt_courseScalarWhereWithAggregatesInput | fieldt_courseScalarWhereWithAggregatesInput[]
    Course_id?: StringWithAggregatesFilter<"fieldt_course"> | string
    Name?: StringWithAggregatesFilter<"fieldt_course"> | string
    Duration?: StringWithAggregatesFilter<"fieldt_course"> | string
    Org_id?: IntNullableWithAggregatesFilter<"fieldt_course"> | number | null
  }

  export type internal_mentorWhereInput = {
    AND?: internal_mentorWhereInput | internal_mentorWhereInput[]
    OR?: internal_mentorWhereInput[]
    NOT?: internal_mentorWhereInput | internal_mentorWhereInput[]
    Int_Mentor_id?: IntFilter<"internal_mentor"> | number
    Student_id?: IntNullableFilter<"internal_mentor"> | number | null
    mentor?: XOR<MentorScalarRelationFilter, mentorWhereInput>
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }

  export type internal_mentorOrderByWithRelationInput = {
    Int_Mentor_id?: SortOrder
    Student_id?: SortOrderInput | SortOrder
    mentor?: mentorOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type internal_mentorWhereUniqueInput = Prisma.AtLeast<{
    Int_Mentor_id?: number
    AND?: internal_mentorWhereInput | internal_mentorWhereInput[]
    OR?: internal_mentorWhereInput[]
    NOT?: internal_mentorWhereInput | internal_mentorWhereInput[]
    Student_id?: IntNullableFilter<"internal_mentor"> | number | null
    mentor?: XOR<MentorScalarRelationFilter, mentorWhereInput>
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }, "Int_Mentor_id">

  export type internal_mentorOrderByWithAggregationInput = {
    Int_Mentor_id?: SortOrder
    Student_id?: SortOrderInput | SortOrder
    _count?: internal_mentorCountOrderByAggregateInput
    _avg?: internal_mentorAvgOrderByAggregateInput
    _max?: internal_mentorMaxOrderByAggregateInput
    _min?: internal_mentorMinOrderByAggregateInput
    _sum?: internal_mentorSumOrderByAggregateInput
  }

  export type internal_mentorScalarWhereWithAggregatesInput = {
    AND?: internal_mentorScalarWhereWithAggregatesInput | internal_mentorScalarWhereWithAggregatesInput[]
    OR?: internal_mentorScalarWhereWithAggregatesInput[]
    NOT?: internal_mentorScalarWhereWithAggregatesInput | internal_mentorScalarWhereWithAggregatesInput[]
    Int_Mentor_id?: IntWithAggregatesFilter<"internal_mentor"> | number
    Student_id?: IntNullableWithAggregatesFilter<"internal_mentor"> | number | null
  }

  export type mentorWhereInput = {
    AND?: mentorWhereInput | mentorWhereInput[]
    OR?: mentorWhereInput[]
    NOT?: mentorWhereInput | mentorWhereInput[]
    Mentor_id?: IntFilter<"mentor"> | number
    Course_id?: StringNullableFilter<"mentor"> | string | null
    external_mentor?: XOR<External_mentorNullableScalarRelationFilter, external_mentorWhereInput> | null
    internal_mentor?: XOR<Internal_mentorNullableScalarRelationFilter, internal_mentorWhereInput> | null
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
    fieldt_course?: XOR<Fieldt_courseNullableScalarRelationFilter, fieldt_courseWhereInput> | null
  }

  export type mentorOrderByWithRelationInput = {
    Mentor_id?: SortOrder
    Course_id?: SortOrderInput | SortOrder
    external_mentor?: external_mentorOrderByWithRelationInput
    internal_mentor?: internal_mentorOrderByWithRelationInput
    person?: personOrderByWithRelationInput
    fieldt_course?: fieldt_courseOrderByWithRelationInput
    _relevance?: mentorOrderByRelevanceInput
  }

  export type mentorWhereUniqueInput = Prisma.AtLeast<{
    Mentor_id?: number
    AND?: mentorWhereInput | mentorWhereInput[]
    OR?: mentorWhereInput[]
    NOT?: mentorWhereInput | mentorWhereInput[]
    Course_id?: StringNullableFilter<"mentor"> | string | null
    external_mentor?: XOR<External_mentorNullableScalarRelationFilter, external_mentorWhereInput> | null
    internal_mentor?: XOR<Internal_mentorNullableScalarRelationFilter, internal_mentorWhereInput> | null
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
    fieldt_course?: XOR<Fieldt_courseNullableScalarRelationFilter, fieldt_courseWhereInput> | null
  }, "Mentor_id">

  export type mentorOrderByWithAggregationInput = {
    Mentor_id?: SortOrder
    Course_id?: SortOrderInput | SortOrder
    _count?: mentorCountOrderByAggregateInput
    _avg?: mentorAvgOrderByAggregateInput
    _max?: mentorMaxOrderByAggregateInput
    _min?: mentorMinOrderByAggregateInput
    _sum?: mentorSumOrderByAggregateInput
  }

  export type mentorScalarWhereWithAggregatesInput = {
    AND?: mentorScalarWhereWithAggregatesInput | mentorScalarWhereWithAggregatesInput[]
    OR?: mentorScalarWhereWithAggregatesInput[]
    NOT?: mentorScalarWhereWithAggregatesInput | mentorScalarWhereWithAggregatesInput[]
    Mentor_id?: IntWithAggregatesFilter<"mentor"> | number
    Course_id?: StringNullableWithAggregatesFilter<"mentor"> | string | null
  }

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    Org_id?: IntFilter<"organization"> | number
    Name?: StringFilter<"organization"> | string
    Contact_info?: StringFilter<"organization"> | string
    Approval_Status?: StringNullableFilter<"organization"> | string | null
    Coordinator_id?: IntNullableFilter<"organization"> | number | null
    external_mentor?: External_mentorListRelationFilter
    fieldt_course?: Fieldt_courseListRelationFilter
    coordinator?: XOR<CoordinatorNullableScalarRelationFilter, coordinatorWhereInput> | null
  }

  export type organizationOrderByWithRelationInput = {
    Org_id?: SortOrder
    Name?: SortOrder
    Contact_info?: SortOrder
    Approval_Status?: SortOrderInput | SortOrder
    Coordinator_id?: SortOrderInput | SortOrder
    external_mentor?: external_mentorOrderByRelationAggregateInput
    fieldt_course?: fieldt_courseOrderByRelationAggregateInput
    coordinator?: coordinatorOrderByWithRelationInput
    _relevance?: organizationOrderByRelevanceInput
  }

  export type organizationWhereUniqueInput = Prisma.AtLeast<{
    Org_id?: number
    AND?: organizationWhereInput | organizationWhereInput[]
    OR?: organizationWhereInput[]
    NOT?: organizationWhereInput | organizationWhereInput[]
    Name?: StringFilter<"organization"> | string
    Contact_info?: StringFilter<"organization"> | string
    Approval_Status?: StringNullableFilter<"organization"> | string | null
    Coordinator_id?: IntNullableFilter<"organization"> | number | null
    external_mentor?: External_mentorListRelationFilter
    fieldt_course?: Fieldt_courseListRelationFilter
    coordinator?: XOR<CoordinatorNullableScalarRelationFilter, coordinatorWhereInput> | null
  }, "Org_id">

  export type organizationOrderByWithAggregationInput = {
    Org_id?: SortOrder
    Name?: SortOrder
    Contact_info?: SortOrder
    Approval_Status?: SortOrderInput | SortOrder
    Coordinator_id?: SortOrderInput | SortOrder
    _count?: organizationCountOrderByAggregateInput
    _avg?: organizationAvgOrderByAggregateInput
    _max?: organizationMaxOrderByAggregateInput
    _min?: organizationMinOrderByAggregateInput
    _sum?: organizationSumOrderByAggregateInput
  }

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    OR?: organizationScalarWhereWithAggregatesInput[]
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[]
    Org_id?: IntWithAggregatesFilter<"organization"> | number
    Name?: StringWithAggregatesFilter<"organization"> | string
    Contact_info?: StringWithAggregatesFilter<"organization"> | string
    Approval_Status?: StringNullableWithAggregatesFilter<"organization"> | string | null
    Coordinator_id?: IntNullableWithAggregatesFilter<"organization"> | number | null
  }

  export type personWhereInput = {
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    Person_id?: IntFilter<"person"> | number
    Name?: StringFilter<"person"> | string
    Email?: StringNullableFilter<"person"> | string | null
    Sex?: StringNullableFilter<"person"> | string | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    mentor?: XOR<MentorNullableScalarRelationFilter, mentorWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }

  export type personOrderByWithRelationInput = {
    Person_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrderInput | SortOrder
    Sex?: SortOrderInput | SortOrder
    employee?: employeeOrderByWithRelationInput
    mentor?: mentorOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
    _relevance?: personOrderByRelevanceInput
  }

  export type personWhereUniqueInput = Prisma.AtLeast<{
    Person_id?: number
    Email?: string
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    Name?: StringFilter<"person"> | string
    Sex?: StringNullableFilter<"person"> | string | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, employeeWhereInput> | null
    mentor?: XOR<MentorNullableScalarRelationFilter, mentorWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }, "Person_id" | "Email">

  export type personOrderByWithAggregationInput = {
    Person_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrderInput | SortOrder
    Sex?: SortOrderInput | SortOrder
    _count?: personCountOrderByAggregateInput
    _avg?: personAvgOrderByAggregateInput
    _max?: personMaxOrderByAggregateInput
    _min?: personMinOrderByAggregateInput
    _sum?: personSumOrderByAggregateInput
  }

  export type personScalarWhereWithAggregatesInput = {
    AND?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    OR?: personScalarWhereWithAggregatesInput[]
    NOT?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    Person_id?: IntWithAggregatesFilter<"person"> | number
    Name?: StringWithAggregatesFilter<"person"> | string
    Email?: StringNullableWithAggregatesFilter<"person"> | string | null
    Sex?: StringNullableWithAggregatesFilter<"person"> | string | null
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    Student_id?: IntFilter<"student"> | number
    Level?: StringNullableFilter<"student"> | string | null
    Major_Dept?: StringFilter<"student"> | string
    Evaluation_id?: IntNullableFilter<"student"> | number | null
    enroll?: EnrollListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    internal_mentor?: Internal_mentorListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }

  export type studentOrderByWithRelationInput = {
    Student_id?: SortOrder
    Level?: SortOrderInput | SortOrder
    Major_Dept?: SortOrder
    Evaluation_id?: SortOrderInput | SortOrder
    enroll?: enrollOrderByRelationAggregateInput
    enrollment?: enrollmentOrderByRelationAggregateInput
    internal_mentor?: internal_mentorOrderByRelationAggregateInput
    person?: personOrderByWithRelationInput
    _relevance?: studentOrderByRelevanceInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    Student_id?: number
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    Level?: StringNullableFilter<"student"> | string | null
    Major_Dept?: StringFilter<"student"> | string
    Evaluation_id?: IntNullableFilter<"student"> | number | null
    enroll?: EnrollListRelationFilter
    enrollment?: EnrollmentListRelationFilter
    internal_mentor?: Internal_mentorListRelationFilter
    person?: XOR<PersonScalarRelationFilter, personWhereInput>
  }, "Student_id">

  export type studentOrderByWithAggregationInput = {
    Student_id?: SortOrder
    Level?: SortOrderInput | SortOrder
    Major_Dept?: SortOrder
    Evaluation_id?: SortOrderInput | SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    Student_id?: IntWithAggregatesFilter<"student"> | number
    Level?: StringNullableWithAggregatesFilter<"student"> | string | null
    Major_Dept?: StringWithAggregatesFilter<"student"> | string
    Evaluation_id?: IntNullableWithAggregatesFilter<"student"> | number | null
  }

  export type coordinatorCreateInput = {
    Coordinator_id: number
    Name?: string | null
    enrollment?: enrollmentCreateNestedManyWithoutCoordinatorInput
    organization?: organizationCreateNestedManyWithoutCoordinatorInput
  }

  export type coordinatorUncheckedCreateInput = {
    Coordinator_id: number
    Name?: string | null
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCoordinatorInput
    organization?: organizationUncheckedCreateNestedManyWithoutCoordinatorInput
  }

  export type coordinatorUpdateInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    enrollment?: enrollmentUpdateManyWithoutCoordinatorNestedInput
    organization?: organizationUpdateManyWithoutCoordinatorNestedInput
  }

  export type coordinatorUncheckedUpdateInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    enrollment?: enrollmentUncheckedUpdateManyWithoutCoordinatorNestedInput
    organization?: organizationUncheckedUpdateManyWithoutCoordinatorNestedInput
  }

  export type coordinatorCreateManyInput = {
    Coordinator_id: number
    Name?: string | null
  }

  export type coordinatorUpdateManyMutationInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type coordinatorUncheckedUpdateManyInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type employeeCreateInput = {
    Salary?: number | null
    Position: string
    person: personCreateNestedOneWithoutEmployeeInput
  }

  export type employeeUncheckedCreateInput = {
    Employee_id: number
    Salary?: number | null
    Position: string
  }

  export type employeeUpdateInput = {
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
    Position?: StringFieldUpdateOperationsInput | string
    person?: personUpdateOneRequiredWithoutEmployeeNestedInput
  }

  export type employeeUncheckedUpdateInput = {
    Employee_id?: IntFieldUpdateOperationsInput | number
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
    Position?: StringFieldUpdateOperationsInput | string
  }

  export type employeeCreateManyInput = {
    Employee_id: number
    Salary?: number | null
    Position: string
  }

  export type employeeUpdateManyMutationInput = {
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
    Position?: StringFieldUpdateOperationsInput | string
  }

  export type employeeUncheckedUpdateManyInput = {
    Employee_id?: IntFieldUpdateOperationsInput | number
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
    Position?: StringFieldUpdateOperationsInput | string
  }

  export type enrollCreateInput = {
    student: studentCreateNestedOneWithoutEnrollInput
    fieldt_course: fieldt_courseCreateNestedOneWithoutEnrollInput
  }

  export type enrollUncheckedCreateInput = {
    Student_id: number
    Course_id: string
  }

  export type enrollUpdateInput = {
    student?: studentUpdateOneRequiredWithoutEnrollNestedInput
    fieldt_course?: fieldt_courseUpdateOneRequiredWithoutEnrollNestedInput
  }

  export type enrollUncheckedUpdateInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
    Course_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollCreateManyInput = {
    Student_id: number
    Course_id: string
  }

  export type enrollUpdateManyMutationInput = {

  }

  export type enrollUncheckedUpdateManyInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
    Course_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentCreateInput = {
    Enrollment_id: number
    Semester?: string | null
    Final_grade?: string | null
    student?: studentCreateNestedOneWithoutEnrollmentInput
    fieldt_course?: fieldt_courseCreateNestedOneWithoutEnrollmentInput
    coordinator?: coordinatorCreateNestedOneWithoutEnrollmentInput
  }

  export type enrollmentUncheckedCreateInput = {
    Enrollment_id: number
    Student_id?: number | null
    Course_id?: string | null
    Semester?: string | null
    Final_grade?: string | null
    Coordinator_id?: number | null
  }

  export type enrollmentUpdateInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    student?: studentUpdateOneWithoutEnrollmentNestedInput
    fieldt_course?: fieldt_courseUpdateOneWithoutEnrollmentNestedInput
    coordinator?: coordinatorUpdateOneWithoutEnrollmentNestedInput
  }

  export type enrollmentUncheckedUpdateInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enrollmentCreateManyInput = {
    Enrollment_id: number
    Student_id?: number | null
    Course_id?: string | null
    Semester?: string | null
    Final_grade?: string | null
    Coordinator_id?: number | null
  }

  export type enrollmentUpdateManyMutationInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type enrollmentUncheckedUpdateManyInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type evaluationCreateInput = {
    Evaluation_id: number
    Grade?: string | null
  }

  export type evaluationUncheckedCreateInput = {
    Evaluation_id: number
    Grade?: string | null
  }

  export type evaluationUpdateInput = {
    Evaluation_id?: IntFieldUpdateOperationsInput | number
    Grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluationUncheckedUpdateInput = {
    Evaluation_id?: IntFieldUpdateOperationsInput | number
    Grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluationCreateManyInput = {
    Evaluation_id: number
    Grade?: string | null
  }

  export type evaluationUpdateManyMutationInput = {
    Evaluation_id?: IntFieldUpdateOperationsInput | number
    Grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluationUncheckedUpdateManyInput = {
    Evaluation_id?: IntFieldUpdateOperationsInput | number
    Grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type external_mentorCreateInput = {
    mentor: mentorCreateNestedOneWithoutExternal_mentorInput
    organization?: organizationCreateNestedOneWithoutExternal_mentorInput
  }

  export type external_mentorUncheckedCreateInput = {
    Ext_Mentor_id: number
    Org_id?: number | null
  }

  export type external_mentorUpdateInput = {
    mentor?: mentorUpdateOneRequiredWithoutExternal_mentorNestedInput
    organization?: organizationUpdateOneWithoutExternal_mentorNestedInput
  }

  export type external_mentorUncheckedUpdateInput = {
    Ext_Mentor_id?: IntFieldUpdateOperationsInput | number
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type external_mentorCreateManyInput = {
    Ext_Mentor_id: number
    Org_id?: number | null
  }

  export type external_mentorUpdateManyMutationInput = {

  }

  export type external_mentorUncheckedUpdateManyInput = {
    Ext_Mentor_id?: IntFieldUpdateOperationsInput | number
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type fieldt_courseCreateInput = {
    Course_id: string
    Name: string
    Duration: string
    enroll?: enrollCreateNestedManyWithoutFieldt_courseInput
    enrollment?: enrollmentCreateNestedManyWithoutFieldt_courseInput
    organization?: organizationCreateNestedOneWithoutFieldt_courseInput
    mentor?: mentorCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseUncheckedCreateInput = {
    Course_id: string
    Name: string
    Duration: string
    Org_id?: number | null
    enroll?: enrollUncheckedCreateNestedManyWithoutFieldt_courseInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutFieldt_courseInput
    mentor?: mentorUncheckedCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseUpdateInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    enroll?: enrollUpdateManyWithoutFieldt_courseNestedInput
    enrollment?: enrollmentUpdateManyWithoutFieldt_courseNestedInput
    organization?: organizationUpdateOneWithoutFieldt_courseNestedInput
    mentor?: mentorUpdateManyWithoutFieldt_courseNestedInput
  }

  export type fieldt_courseUncheckedUpdateInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUncheckedUpdateManyWithoutFieldt_courseNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutFieldt_courseNestedInput
    mentor?: mentorUncheckedUpdateManyWithoutFieldt_courseNestedInput
  }

  export type fieldt_courseCreateManyInput = {
    Course_id: string
    Name: string
    Duration: string
    Org_id?: number | null
  }

  export type fieldt_courseUpdateManyMutationInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
  }

  export type fieldt_courseUncheckedUpdateManyInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type internal_mentorCreateInput = {
    mentor: mentorCreateNestedOneWithoutInternal_mentorInput
    student?: studentCreateNestedOneWithoutInternal_mentorInput
  }

  export type internal_mentorUncheckedCreateInput = {
    Int_Mentor_id: number
    Student_id?: number | null
  }

  export type internal_mentorUpdateInput = {
    mentor?: mentorUpdateOneRequiredWithoutInternal_mentorNestedInput
    student?: studentUpdateOneWithoutInternal_mentorNestedInput
  }

  export type internal_mentorUncheckedUpdateInput = {
    Int_Mentor_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type internal_mentorCreateManyInput = {
    Int_Mentor_id: number
    Student_id?: number | null
  }

  export type internal_mentorUpdateManyMutationInput = {

  }

  export type internal_mentorUncheckedUpdateManyInput = {
    Int_Mentor_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mentorCreateInput = {
    external_mentor?: external_mentorCreateNestedOneWithoutMentorInput
    internal_mentor?: internal_mentorCreateNestedOneWithoutMentorInput
    person: personCreateNestedOneWithoutMentorInput
    fieldt_course?: fieldt_courseCreateNestedOneWithoutMentorInput
  }

  export type mentorUncheckedCreateInput = {
    Mentor_id: number
    Course_id?: string | null
    external_mentor?: external_mentorUncheckedCreateNestedOneWithoutMentorInput
    internal_mentor?: internal_mentorUncheckedCreateNestedOneWithoutMentorInput
  }

  export type mentorUpdateInput = {
    external_mentor?: external_mentorUpdateOneWithoutMentorNestedInput
    internal_mentor?: internal_mentorUpdateOneWithoutMentorNestedInput
    person?: personUpdateOneRequiredWithoutMentorNestedInput
    fieldt_course?: fieldt_courseUpdateOneWithoutMentorNestedInput
  }

  export type mentorUncheckedUpdateInput = {
    Mentor_id?: IntFieldUpdateOperationsInput | number
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    external_mentor?: external_mentorUncheckedUpdateOneWithoutMentorNestedInput
    internal_mentor?: internal_mentorUncheckedUpdateOneWithoutMentorNestedInput
  }

  export type mentorCreateManyInput = {
    Mentor_id: number
    Course_id?: string | null
  }

  export type mentorUpdateManyMutationInput = {

  }

  export type mentorUncheckedUpdateManyInput = {
    Mentor_id?: IntFieldUpdateOperationsInput | number
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationCreateInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    external_mentor?: external_mentorCreateNestedManyWithoutOrganizationInput
    fieldt_course?: fieldt_courseCreateNestedManyWithoutOrganizationInput
    coordinator?: coordinatorCreateNestedOneWithoutOrganizationInput
  }

  export type organizationUncheckedCreateInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    Coordinator_id?: number | null
    external_mentor?: external_mentorUncheckedCreateNestedManyWithoutOrganizationInput
    fieldt_course?: fieldt_courseUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUpdateInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    external_mentor?: external_mentorUpdateManyWithoutOrganizationNestedInput
    fieldt_course?: fieldt_courseUpdateManyWithoutOrganizationNestedInput
    coordinator?: coordinatorUpdateOneWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
    external_mentor?: external_mentorUncheckedUpdateManyWithoutOrganizationNestedInput
    fieldt_course?: fieldt_courseUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationCreateManyInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    Coordinator_id?: number | null
  }

  export type organizationUpdateManyMutationInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationUncheckedUpdateManyInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type personCreateInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    employee?: employeeCreateNestedOneWithoutPersonInput
    mentor?: mentorCreateNestedOneWithoutPersonInput
    student?: studentCreateNestedOneWithoutPersonInput
  }

  export type personUncheckedCreateInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    employee?: employeeUncheckedCreateNestedOneWithoutPersonInput
    mentor?: mentorUncheckedCreateNestedOneWithoutPersonInput
    student?: studentUncheckedCreateNestedOneWithoutPersonInput
  }

  export type personUpdateInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeeUpdateOneWithoutPersonNestedInput
    mentor?: mentorUpdateOneWithoutPersonNestedInput
    student?: studentUpdateOneWithoutPersonNestedInput
  }

  export type personUncheckedUpdateInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeeUncheckedUpdateOneWithoutPersonNestedInput
    mentor?: mentorUncheckedUpdateOneWithoutPersonNestedInput
    student?: studentUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type personCreateManyInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
  }

  export type personUpdateManyMutationInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personUncheckedUpdateManyInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentCreateInput = {
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorCreateNestedManyWithoutStudentInput
    person: personCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    Student_id: number
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollUncheckedCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUpdateManyWithoutStudentNestedInput
    person?: personUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUncheckedUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    Student_id: number
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
  }

  export type studentUpdateManyMutationInput = {
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studentUncheckedUpdateManyInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnrollmentListRelationFilter = {
    every?: enrollmentWhereInput
    some?: enrollmentWhereInput
    none?: enrollmentWhereInput
  }

  export type OrganizationListRelationFilter = {
    every?: organizationWhereInput
    some?: organizationWhereInput
    none?: organizationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type enrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type coordinatorOrderByRelevanceInput = {
    fields: coordinatorOrderByRelevanceFieldEnum | coordinatorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type coordinatorCountOrderByAggregateInput = {
    Coordinator_id?: SortOrder
    Name?: SortOrder
  }

  export type coordinatorAvgOrderByAggregateInput = {
    Coordinator_id?: SortOrder
  }

  export type coordinatorMaxOrderByAggregateInput = {
    Coordinator_id?: SortOrder
    Name?: SortOrder
  }

  export type coordinatorMinOrderByAggregateInput = {
    Coordinator_id?: SortOrder
    Name?: SortOrder
  }

  export type coordinatorSumOrderByAggregateInput = {
    Coordinator_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type PersonScalarRelationFilter = {
    is?: personWhereInput
    isNot?: personWhereInput
  }

  export type employeeOrderByRelevanceInput = {
    fields: employeeOrderByRelevanceFieldEnum | employeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type employeeCountOrderByAggregateInput = {
    Employee_id?: SortOrder
    Salary?: SortOrder
    Position?: SortOrder
  }

  export type employeeAvgOrderByAggregateInput = {
    Employee_id?: SortOrder
    Salary?: SortOrder
  }

  export type employeeMaxOrderByAggregateInput = {
    Employee_id?: SortOrder
    Salary?: SortOrder
    Position?: SortOrder
  }

  export type employeeMinOrderByAggregateInput = {
    Employee_id?: SortOrder
    Salary?: SortOrder
    Position?: SortOrder
  }

  export type employeeSumOrderByAggregateInput = {
    Employee_id?: SortOrder
    Salary?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type Fieldt_courseScalarRelationFilter = {
    is?: fieldt_courseWhereInput
    isNot?: fieldt_courseWhereInput
  }

  export type enrollOrderByRelevanceInput = {
    fields: enrollOrderByRelevanceFieldEnum | enrollOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enrollStudent_idCourse_idCompoundUniqueInput = {
    Student_id: number
    Course_id: string
  }

  export type enrollCountOrderByAggregateInput = {
    Student_id?: SortOrder
    Course_id?: SortOrder
  }

  export type enrollAvgOrderByAggregateInput = {
    Student_id?: SortOrder
  }

  export type enrollMaxOrderByAggregateInput = {
    Student_id?: SortOrder
    Course_id?: SortOrder
  }

  export type enrollMinOrderByAggregateInput = {
    Student_id?: SortOrder
    Course_id?: SortOrder
  }

  export type enrollSumOrderByAggregateInput = {
    Student_id?: SortOrder
  }

  export type StudentNullableScalarRelationFilter = {
    is?: studentWhereInput | null
    isNot?: studentWhereInput | null
  }

  export type Fieldt_courseNullableScalarRelationFilter = {
    is?: fieldt_courseWhereInput | null
    isNot?: fieldt_courseWhereInput | null
  }

  export type CoordinatorNullableScalarRelationFilter = {
    is?: coordinatorWhereInput | null
    isNot?: coordinatorWhereInput | null
  }

  export type enrollmentOrderByRelevanceInput = {
    fields: enrollmentOrderByRelevanceFieldEnum | enrollmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enrollmentStudent_idCourse_idSemesterCompoundUniqueInput = {
    Student_id: number
    Course_id: string
    Semester: string
  }

  export type enrollmentCountOrderByAggregateInput = {
    Enrollment_id?: SortOrder
    Student_id?: SortOrder
    Course_id?: SortOrder
    Semester?: SortOrder
    Final_grade?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type enrollmentAvgOrderByAggregateInput = {
    Enrollment_id?: SortOrder
    Student_id?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type enrollmentMaxOrderByAggregateInput = {
    Enrollment_id?: SortOrder
    Student_id?: SortOrder
    Course_id?: SortOrder
    Semester?: SortOrder
    Final_grade?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type enrollmentMinOrderByAggregateInput = {
    Enrollment_id?: SortOrder
    Student_id?: SortOrder
    Course_id?: SortOrder
    Semester?: SortOrder
    Final_grade?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type enrollmentSumOrderByAggregateInput = {
    Enrollment_id?: SortOrder
    Student_id?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type evaluationOrderByRelevanceInput = {
    fields: evaluationOrderByRelevanceFieldEnum | evaluationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type evaluationCountOrderByAggregateInput = {
    Evaluation_id?: SortOrder
    Grade?: SortOrder
  }

  export type evaluationAvgOrderByAggregateInput = {
    Evaluation_id?: SortOrder
  }

  export type evaluationMaxOrderByAggregateInput = {
    Evaluation_id?: SortOrder
    Grade?: SortOrder
  }

  export type evaluationMinOrderByAggregateInput = {
    Evaluation_id?: SortOrder
    Grade?: SortOrder
  }

  export type evaluationSumOrderByAggregateInput = {
    Evaluation_id?: SortOrder
  }

  export type MentorScalarRelationFilter = {
    is?: mentorWhereInput
    isNot?: mentorWhereInput
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: organizationWhereInput | null
    isNot?: organizationWhereInput | null
  }

  export type external_mentorCountOrderByAggregateInput = {
    Ext_Mentor_id?: SortOrder
    Org_id?: SortOrder
  }

  export type external_mentorAvgOrderByAggregateInput = {
    Ext_Mentor_id?: SortOrder
    Org_id?: SortOrder
  }

  export type external_mentorMaxOrderByAggregateInput = {
    Ext_Mentor_id?: SortOrder
    Org_id?: SortOrder
  }

  export type external_mentorMinOrderByAggregateInput = {
    Ext_Mentor_id?: SortOrder
    Org_id?: SortOrder
  }

  export type external_mentorSumOrderByAggregateInput = {
    Ext_Mentor_id?: SortOrder
    Org_id?: SortOrder
  }

  export type EnrollListRelationFilter = {
    every?: enrollWhereInput
    some?: enrollWhereInput
    none?: enrollWhereInput
  }

  export type MentorListRelationFilter = {
    every?: mentorWhereInput
    some?: mentorWhereInput
    none?: mentorWhereInput
  }

  export type enrollOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mentorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fieldt_courseOrderByRelevanceInput = {
    fields: fieldt_courseOrderByRelevanceFieldEnum | fieldt_courseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type fieldt_courseCountOrderByAggregateInput = {
    Course_id?: SortOrder
    Name?: SortOrder
    Duration?: SortOrder
    Org_id?: SortOrder
  }

  export type fieldt_courseAvgOrderByAggregateInput = {
    Org_id?: SortOrder
  }

  export type fieldt_courseMaxOrderByAggregateInput = {
    Course_id?: SortOrder
    Name?: SortOrder
    Duration?: SortOrder
    Org_id?: SortOrder
  }

  export type fieldt_courseMinOrderByAggregateInput = {
    Course_id?: SortOrder
    Name?: SortOrder
    Duration?: SortOrder
    Org_id?: SortOrder
  }

  export type fieldt_courseSumOrderByAggregateInput = {
    Org_id?: SortOrder
  }

  export type internal_mentorCountOrderByAggregateInput = {
    Int_Mentor_id?: SortOrder
    Student_id?: SortOrder
  }

  export type internal_mentorAvgOrderByAggregateInput = {
    Int_Mentor_id?: SortOrder
    Student_id?: SortOrder
  }

  export type internal_mentorMaxOrderByAggregateInput = {
    Int_Mentor_id?: SortOrder
    Student_id?: SortOrder
  }

  export type internal_mentorMinOrderByAggregateInput = {
    Int_Mentor_id?: SortOrder
    Student_id?: SortOrder
  }

  export type internal_mentorSumOrderByAggregateInput = {
    Int_Mentor_id?: SortOrder
    Student_id?: SortOrder
  }

  export type External_mentorNullableScalarRelationFilter = {
    is?: external_mentorWhereInput | null
    isNot?: external_mentorWhereInput | null
  }

  export type Internal_mentorNullableScalarRelationFilter = {
    is?: internal_mentorWhereInput | null
    isNot?: internal_mentorWhereInput | null
  }

  export type mentorOrderByRelevanceInput = {
    fields: mentorOrderByRelevanceFieldEnum | mentorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mentorCountOrderByAggregateInput = {
    Mentor_id?: SortOrder
    Course_id?: SortOrder
  }

  export type mentorAvgOrderByAggregateInput = {
    Mentor_id?: SortOrder
  }

  export type mentorMaxOrderByAggregateInput = {
    Mentor_id?: SortOrder
    Course_id?: SortOrder
  }

  export type mentorMinOrderByAggregateInput = {
    Mentor_id?: SortOrder
    Course_id?: SortOrder
  }

  export type mentorSumOrderByAggregateInput = {
    Mentor_id?: SortOrder
  }

  export type External_mentorListRelationFilter = {
    every?: external_mentorWhereInput
    some?: external_mentorWhereInput
    none?: external_mentorWhereInput
  }

  export type Fieldt_courseListRelationFilter = {
    every?: fieldt_courseWhereInput
    some?: fieldt_courseWhereInput
    none?: fieldt_courseWhereInput
  }

  export type external_mentorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fieldt_courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type organizationOrderByRelevanceInput = {
    fields: organizationOrderByRelevanceFieldEnum | organizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type organizationCountOrderByAggregateInput = {
    Org_id?: SortOrder
    Name?: SortOrder
    Contact_info?: SortOrder
    Approval_Status?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type organizationAvgOrderByAggregateInput = {
    Org_id?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type organizationMaxOrderByAggregateInput = {
    Org_id?: SortOrder
    Name?: SortOrder
    Contact_info?: SortOrder
    Approval_Status?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type organizationMinOrderByAggregateInput = {
    Org_id?: SortOrder
    Name?: SortOrder
    Contact_info?: SortOrder
    Approval_Status?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type organizationSumOrderByAggregateInput = {
    Org_id?: SortOrder
    Coordinator_id?: SortOrder
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: employeeWhereInput | null
    isNot?: employeeWhereInput | null
  }

  export type MentorNullableScalarRelationFilter = {
    is?: mentorWhereInput | null
    isNot?: mentorWhereInput | null
  }

  export type personOrderByRelevanceInput = {
    fields: personOrderByRelevanceFieldEnum | personOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type personCountOrderByAggregateInput = {
    Person_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Sex?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    Person_id?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    Person_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Sex?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    Person_id?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    Sex?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    Person_id?: SortOrder
  }

  export type Internal_mentorListRelationFilter = {
    every?: internal_mentorWhereInput
    some?: internal_mentorWhereInput
    none?: internal_mentorWhereInput
  }

  export type internal_mentorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentOrderByRelevanceInput = {
    fields: studentOrderByRelevanceFieldEnum | studentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type studentCountOrderByAggregateInput = {
    Student_id?: SortOrder
    Level?: SortOrder
    Major_Dept?: SortOrder
    Evaluation_id?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    Student_id?: SortOrder
    Evaluation_id?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    Student_id?: SortOrder
    Level?: SortOrder
    Major_Dept?: SortOrder
    Evaluation_id?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    Student_id?: SortOrder
    Level?: SortOrder
    Major_Dept?: SortOrder
    Evaluation_id?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    Student_id?: SortOrder
    Evaluation_id?: SortOrder
  }

  export type enrollmentCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<enrollmentCreateWithoutCoordinatorInput, enrollmentUncheckedCreateWithoutCoordinatorInput> | enrollmentCreateWithoutCoordinatorInput[] | enrollmentUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCoordinatorInput | enrollmentCreateOrConnectWithoutCoordinatorInput[]
    createMany?: enrollmentCreateManyCoordinatorInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type organizationCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<organizationCreateWithoutCoordinatorInput, organizationUncheckedCreateWithoutCoordinatorInput> | organizationCreateWithoutCoordinatorInput[] | organizationUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCoordinatorInput | organizationCreateOrConnectWithoutCoordinatorInput[]
    createMany?: organizationCreateManyCoordinatorInputEnvelope
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
  }

  export type enrollmentUncheckedCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<enrollmentCreateWithoutCoordinatorInput, enrollmentUncheckedCreateWithoutCoordinatorInput> | enrollmentCreateWithoutCoordinatorInput[] | enrollmentUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCoordinatorInput | enrollmentCreateOrConnectWithoutCoordinatorInput[]
    createMany?: enrollmentCreateManyCoordinatorInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type organizationUncheckedCreateNestedManyWithoutCoordinatorInput = {
    create?: XOR<organizationCreateWithoutCoordinatorInput, organizationUncheckedCreateWithoutCoordinatorInput> | organizationCreateWithoutCoordinatorInput[] | organizationUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCoordinatorInput | organizationCreateOrConnectWithoutCoordinatorInput[]
    createMany?: organizationCreateManyCoordinatorInputEnvelope
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type enrollmentUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<enrollmentCreateWithoutCoordinatorInput, enrollmentUncheckedCreateWithoutCoordinatorInput> | enrollmentCreateWithoutCoordinatorInput[] | enrollmentUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCoordinatorInput | enrollmentCreateOrConnectWithoutCoordinatorInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCoordinatorInput | enrollmentUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: enrollmentCreateManyCoordinatorInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutCoordinatorInput | enrollmentUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutCoordinatorInput | enrollmentUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type organizationUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<organizationCreateWithoutCoordinatorInput, organizationUncheckedCreateWithoutCoordinatorInput> | organizationCreateWithoutCoordinatorInput[] | organizationUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCoordinatorInput | organizationCreateOrConnectWithoutCoordinatorInput[]
    upsert?: organizationUpsertWithWhereUniqueWithoutCoordinatorInput | organizationUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: organizationCreateManyCoordinatorInputEnvelope
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    update?: organizationUpdateWithWhereUniqueWithoutCoordinatorInput | organizationUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: organizationUpdateManyWithWhereWithoutCoordinatorInput | organizationUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[]
  }

  export type enrollmentUncheckedUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<enrollmentCreateWithoutCoordinatorInput, enrollmentUncheckedCreateWithoutCoordinatorInput> | enrollmentCreateWithoutCoordinatorInput[] | enrollmentUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCoordinatorInput | enrollmentCreateOrConnectWithoutCoordinatorInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCoordinatorInput | enrollmentUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: enrollmentCreateManyCoordinatorInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutCoordinatorInput | enrollmentUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutCoordinatorInput | enrollmentUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type organizationUncheckedUpdateManyWithoutCoordinatorNestedInput = {
    create?: XOR<organizationCreateWithoutCoordinatorInput, organizationUncheckedCreateWithoutCoordinatorInput> | organizationCreateWithoutCoordinatorInput[] | organizationUncheckedCreateWithoutCoordinatorInput[]
    connectOrCreate?: organizationCreateOrConnectWithoutCoordinatorInput | organizationCreateOrConnectWithoutCoordinatorInput[]
    upsert?: organizationUpsertWithWhereUniqueWithoutCoordinatorInput | organizationUpsertWithWhereUniqueWithoutCoordinatorInput[]
    createMany?: organizationCreateManyCoordinatorInputEnvelope
    set?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    disconnect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    delete?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    connect?: organizationWhereUniqueInput | organizationWhereUniqueInput[]
    update?: organizationUpdateWithWhereUniqueWithoutCoordinatorInput | organizationUpdateWithWhereUniqueWithoutCoordinatorInput[]
    updateMany?: organizationUpdateManyWithWhereWithoutCoordinatorInput | organizationUpdateManyWithWhereWithoutCoordinatorInput[]
    deleteMany?: organizationScalarWhereInput | organizationScalarWhereInput[]
  }

  export type personCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<personCreateWithoutEmployeeInput, personUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: personCreateOrConnectWithoutEmployeeInput
    connect?: personWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type personUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<personCreateWithoutEmployeeInput, personUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: personCreateOrConnectWithoutEmployeeInput
    upsert?: personUpsertWithoutEmployeeInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutEmployeeInput, personUpdateWithoutEmployeeInput>, personUncheckedUpdateWithoutEmployeeInput>
  }

  export type studentCreateNestedOneWithoutEnrollInput = {
    create?: XOR<studentCreateWithoutEnrollInput, studentUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: studentCreateOrConnectWithoutEnrollInput
    connect?: studentWhereUniqueInput
  }

  export type fieldt_courseCreateNestedOneWithoutEnrollInput = {
    create?: XOR<fieldt_courseCreateWithoutEnrollInput, fieldt_courseUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutEnrollInput
    connect?: fieldt_courseWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutEnrollNestedInput = {
    create?: XOR<studentCreateWithoutEnrollInput, studentUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: studentCreateOrConnectWithoutEnrollInput
    upsert?: studentUpsertWithoutEnrollInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutEnrollInput, studentUpdateWithoutEnrollInput>, studentUncheckedUpdateWithoutEnrollInput>
  }

  export type fieldt_courseUpdateOneRequiredWithoutEnrollNestedInput = {
    create?: XOR<fieldt_courseCreateWithoutEnrollInput, fieldt_courseUncheckedCreateWithoutEnrollInput>
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutEnrollInput
    upsert?: fieldt_courseUpsertWithoutEnrollInput
    connect?: fieldt_courseWhereUniqueInput
    update?: XOR<XOR<fieldt_courseUpdateToOneWithWhereWithoutEnrollInput, fieldt_courseUpdateWithoutEnrollInput>, fieldt_courseUncheckedUpdateWithoutEnrollInput>
  }

  export type studentCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: studentCreateOrConnectWithoutEnrollmentInput
    connect?: studentWhereUniqueInput
  }

  export type fieldt_courseCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<fieldt_courseCreateWithoutEnrollmentInput, fieldt_courseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutEnrollmentInput
    connect?: fieldt_courseWhereUniqueInput
  }

  export type coordinatorCreateNestedOneWithoutEnrollmentInput = {
    create?: XOR<coordinatorCreateWithoutEnrollmentInput, coordinatorUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: coordinatorCreateOrConnectWithoutEnrollmentInput
    connect?: coordinatorWhereUniqueInput
  }

  export type studentUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: studentCreateOrConnectWithoutEnrollmentInput
    upsert?: studentUpsertWithoutEnrollmentInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutEnrollmentInput, studentUpdateWithoutEnrollmentInput>, studentUncheckedUpdateWithoutEnrollmentInput>
  }

  export type fieldt_courseUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<fieldt_courseCreateWithoutEnrollmentInput, fieldt_courseUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutEnrollmentInput
    upsert?: fieldt_courseUpsertWithoutEnrollmentInput
    disconnect?: fieldt_courseWhereInput | boolean
    delete?: fieldt_courseWhereInput | boolean
    connect?: fieldt_courseWhereUniqueInput
    update?: XOR<XOR<fieldt_courseUpdateToOneWithWhereWithoutEnrollmentInput, fieldt_courseUpdateWithoutEnrollmentInput>, fieldt_courseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type coordinatorUpdateOneWithoutEnrollmentNestedInput = {
    create?: XOR<coordinatorCreateWithoutEnrollmentInput, coordinatorUncheckedCreateWithoutEnrollmentInput>
    connectOrCreate?: coordinatorCreateOrConnectWithoutEnrollmentInput
    upsert?: coordinatorUpsertWithoutEnrollmentInput
    disconnect?: coordinatorWhereInput | boolean
    delete?: coordinatorWhereInput | boolean
    connect?: coordinatorWhereUniqueInput
    update?: XOR<XOR<coordinatorUpdateToOneWithWhereWithoutEnrollmentInput, coordinatorUpdateWithoutEnrollmentInput>, coordinatorUncheckedUpdateWithoutEnrollmentInput>
  }

  export type mentorCreateNestedOneWithoutExternal_mentorInput = {
    create?: XOR<mentorCreateWithoutExternal_mentorInput, mentorUncheckedCreateWithoutExternal_mentorInput>
    connectOrCreate?: mentorCreateOrConnectWithoutExternal_mentorInput
    connect?: mentorWhereUniqueInput
  }

  export type organizationCreateNestedOneWithoutExternal_mentorInput = {
    create?: XOR<organizationCreateWithoutExternal_mentorInput, organizationUncheckedCreateWithoutExternal_mentorInput>
    connectOrCreate?: organizationCreateOrConnectWithoutExternal_mentorInput
    connect?: organizationWhereUniqueInput
  }

  export type mentorUpdateOneRequiredWithoutExternal_mentorNestedInput = {
    create?: XOR<mentorCreateWithoutExternal_mentorInput, mentorUncheckedCreateWithoutExternal_mentorInput>
    connectOrCreate?: mentorCreateOrConnectWithoutExternal_mentorInput
    upsert?: mentorUpsertWithoutExternal_mentorInput
    connect?: mentorWhereUniqueInput
    update?: XOR<XOR<mentorUpdateToOneWithWhereWithoutExternal_mentorInput, mentorUpdateWithoutExternal_mentorInput>, mentorUncheckedUpdateWithoutExternal_mentorInput>
  }

  export type organizationUpdateOneWithoutExternal_mentorNestedInput = {
    create?: XOR<organizationCreateWithoutExternal_mentorInput, organizationUncheckedCreateWithoutExternal_mentorInput>
    connectOrCreate?: organizationCreateOrConnectWithoutExternal_mentorInput
    upsert?: organizationUpsertWithoutExternal_mentorInput
    disconnect?: organizationWhereInput | boolean
    delete?: organizationWhereInput | boolean
    connect?: organizationWhereUniqueInput
    update?: XOR<XOR<organizationUpdateToOneWithWhereWithoutExternal_mentorInput, organizationUpdateWithoutExternal_mentorInput>, organizationUncheckedUpdateWithoutExternal_mentorInput>
  }

  export type enrollCreateNestedManyWithoutFieldt_courseInput = {
    create?: XOR<enrollCreateWithoutFieldt_courseInput, enrollUncheckedCreateWithoutFieldt_courseInput> | enrollCreateWithoutFieldt_courseInput[] | enrollUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutFieldt_courseInput | enrollCreateOrConnectWithoutFieldt_courseInput[]
    createMany?: enrollCreateManyFieldt_courseInputEnvelope
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
  }

  export type enrollmentCreateNestedManyWithoutFieldt_courseInput = {
    create?: XOR<enrollmentCreateWithoutFieldt_courseInput, enrollmentUncheckedCreateWithoutFieldt_courseInput> | enrollmentCreateWithoutFieldt_courseInput[] | enrollmentUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutFieldt_courseInput | enrollmentCreateOrConnectWithoutFieldt_courseInput[]
    createMany?: enrollmentCreateManyFieldt_courseInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type organizationCreateNestedOneWithoutFieldt_courseInput = {
    create?: XOR<organizationCreateWithoutFieldt_courseInput, organizationUncheckedCreateWithoutFieldt_courseInput>
    connectOrCreate?: organizationCreateOrConnectWithoutFieldt_courseInput
    connect?: organizationWhereUniqueInput
  }

  export type mentorCreateNestedManyWithoutFieldt_courseInput = {
    create?: XOR<mentorCreateWithoutFieldt_courseInput, mentorUncheckedCreateWithoutFieldt_courseInput> | mentorCreateWithoutFieldt_courseInput[] | mentorUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: mentorCreateOrConnectWithoutFieldt_courseInput | mentorCreateOrConnectWithoutFieldt_courseInput[]
    createMany?: mentorCreateManyFieldt_courseInputEnvelope
    connect?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
  }

  export type enrollUncheckedCreateNestedManyWithoutFieldt_courseInput = {
    create?: XOR<enrollCreateWithoutFieldt_courseInput, enrollUncheckedCreateWithoutFieldt_courseInput> | enrollCreateWithoutFieldt_courseInput[] | enrollUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutFieldt_courseInput | enrollCreateOrConnectWithoutFieldt_courseInput[]
    createMany?: enrollCreateManyFieldt_courseInputEnvelope
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
  }

  export type enrollmentUncheckedCreateNestedManyWithoutFieldt_courseInput = {
    create?: XOR<enrollmentCreateWithoutFieldt_courseInput, enrollmentUncheckedCreateWithoutFieldt_courseInput> | enrollmentCreateWithoutFieldt_courseInput[] | enrollmentUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutFieldt_courseInput | enrollmentCreateOrConnectWithoutFieldt_courseInput[]
    createMany?: enrollmentCreateManyFieldt_courseInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type mentorUncheckedCreateNestedManyWithoutFieldt_courseInput = {
    create?: XOR<mentorCreateWithoutFieldt_courseInput, mentorUncheckedCreateWithoutFieldt_courseInput> | mentorCreateWithoutFieldt_courseInput[] | mentorUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: mentorCreateOrConnectWithoutFieldt_courseInput | mentorCreateOrConnectWithoutFieldt_courseInput[]
    createMany?: mentorCreateManyFieldt_courseInputEnvelope
    connect?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
  }

  export type enrollUpdateManyWithoutFieldt_courseNestedInput = {
    create?: XOR<enrollCreateWithoutFieldt_courseInput, enrollUncheckedCreateWithoutFieldt_courseInput> | enrollCreateWithoutFieldt_courseInput[] | enrollUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutFieldt_courseInput | enrollCreateOrConnectWithoutFieldt_courseInput[]
    upsert?: enrollUpsertWithWhereUniqueWithoutFieldt_courseInput | enrollUpsertWithWhereUniqueWithoutFieldt_courseInput[]
    createMany?: enrollCreateManyFieldt_courseInputEnvelope
    set?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    disconnect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    delete?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    update?: enrollUpdateWithWhereUniqueWithoutFieldt_courseInput | enrollUpdateWithWhereUniqueWithoutFieldt_courseInput[]
    updateMany?: enrollUpdateManyWithWhereWithoutFieldt_courseInput | enrollUpdateManyWithWhereWithoutFieldt_courseInput[]
    deleteMany?: enrollScalarWhereInput | enrollScalarWhereInput[]
  }

  export type enrollmentUpdateManyWithoutFieldt_courseNestedInput = {
    create?: XOR<enrollmentCreateWithoutFieldt_courseInput, enrollmentUncheckedCreateWithoutFieldt_courseInput> | enrollmentCreateWithoutFieldt_courseInput[] | enrollmentUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutFieldt_courseInput | enrollmentCreateOrConnectWithoutFieldt_courseInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutFieldt_courseInput | enrollmentUpsertWithWhereUniqueWithoutFieldt_courseInput[]
    createMany?: enrollmentCreateManyFieldt_courseInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutFieldt_courseInput | enrollmentUpdateWithWhereUniqueWithoutFieldt_courseInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutFieldt_courseInput | enrollmentUpdateManyWithWhereWithoutFieldt_courseInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type organizationUpdateOneWithoutFieldt_courseNestedInput = {
    create?: XOR<organizationCreateWithoutFieldt_courseInput, organizationUncheckedCreateWithoutFieldt_courseInput>
    connectOrCreate?: organizationCreateOrConnectWithoutFieldt_courseInput
    upsert?: organizationUpsertWithoutFieldt_courseInput
    disconnect?: organizationWhereInput | boolean
    delete?: organizationWhereInput | boolean
    connect?: organizationWhereUniqueInput
    update?: XOR<XOR<organizationUpdateToOneWithWhereWithoutFieldt_courseInput, organizationUpdateWithoutFieldt_courseInput>, organizationUncheckedUpdateWithoutFieldt_courseInput>
  }

  export type mentorUpdateManyWithoutFieldt_courseNestedInput = {
    create?: XOR<mentorCreateWithoutFieldt_courseInput, mentorUncheckedCreateWithoutFieldt_courseInput> | mentorCreateWithoutFieldt_courseInput[] | mentorUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: mentorCreateOrConnectWithoutFieldt_courseInput | mentorCreateOrConnectWithoutFieldt_courseInput[]
    upsert?: mentorUpsertWithWhereUniqueWithoutFieldt_courseInput | mentorUpsertWithWhereUniqueWithoutFieldt_courseInput[]
    createMany?: mentorCreateManyFieldt_courseInputEnvelope
    set?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    disconnect?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    delete?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    connect?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    update?: mentorUpdateWithWhereUniqueWithoutFieldt_courseInput | mentorUpdateWithWhereUniqueWithoutFieldt_courseInput[]
    updateMany?: mentorUpdateManyWithWhereWithoutFieldt_courseInput | mentorUpdateManyWithWhereWithoutFieldt_courseInput[]
    deleteMany?: mentorScalarWhereInput | mentorScalarWhereInput[]
  }

  export type enrollUncheckedUpdateManyWithoutFieldt_courseNestedInput = {
    create?: XOR<enrollCreateWithoutFieldt_courseInput, enrollUncheckedCreateWithoutFieldt_courseInput> | enrollCreateWithoutFieldt_courseInput[] | enrollUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutFieldt_courseInput | enrollCreateOrConnectWithoutFieldt_courseInput[]
    upsert?: enrollUpsertWithWhereUniqueWithoutFieldt_courseInput | enrollUpsertWithWhereUniqueWithoutFieldt_courseInput[]
    createMany?: enrollCreateManyFieldt_courseInputEnvelope
    set?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    disconnect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    delete?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    update?: enrollUpdateWithWhereUniqueWithoutFieldt_courseInput | enrollUpdateWithWhereUniqueWithoutFieldt_courseInput[]
    updateMany?: enrollUpdateManyWithWhereWithoutFieldt_courseInput | enrollUpdateManyWithWhereWithoutFieldt_courseInput[]
    deleteMany?: enrollScalarWhereInput | enrollScalarWhereInput[]
  }

  export type enrollmentUncheckedUpdateManyWithoutFieldt_courseNestedInput = {
    create?: XOR<enrollmentCreateWithoutFieldt_courseInput, enrollmentUncheckedCreateWithoutFieldt_courseInput> | enrollmentCreateWithoutFieldt_courseInput[] | enrollmentUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutFieldt_courseInput | enrollmentCreateOrConnectWithoutFieldt_courseInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutFieldt_courseInput | enrollmentUpsertWithWhereUniqueWithoutFieldt_courseInput[]
    createMany?: enrollmentCreateManyFieldt_courseInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutFieldt_courseInput | enrollmentUpdateWithWhereUniqueWithoutFieldt_courseInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutFieldt_courseInput | enrollmentUpdateManyWithWhereWithoutFieldt_courseInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type mentorUncheckedUpdateManyWithoutFieldt_courseNestedInput = {
    create?: XOR<mentorCreateWithoutFieldt_courseInput, mentorUncheckedCreateWithoutFieldt_courseInput> | mentorCreateWithoutFieldt_courseInput[] | mentorUncheckedCreateWithoutFieldt_courseInput[]
    connectOrCreate?: mentorCreateOrConnectWithoutFieldt_courseInput | mentorCreateOrConnectWithoutFieldt_courseInput[]
    upsert?: mentorUpsertWithWhereUniqueWithoutFieldt_courseInput | mentorUpsertWithWhereUniqueWithoutFieldt_courseInput[]
    createMany?: mentorCreateManyFieldt_courseInputEnvelope
    set?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    disconnect?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    delete?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    connect?: mentorWhereUniqueInput | mentorWhereUniqueInput[]
    update?: mentorUpdateWithWhereUniqueWithoutFieldt_courseInput | mentorUpdateWithWhereUniqueWithoutFieldt_courseInput[]
    updateMany?: mentorUpdateManyWithWhereWithoutFieldt_courseInput | mentorUpdateManyWithWhereWithoutFieldt_courseInput[]
    deleteMany?: mentorScalarWhereInput | mentorScalarWhereInput[]
  }

  export type mentorCreateNestedOneWithoutInternal_mentorInput = {
    create?: XOR<mentorCreateWithoutInternal_mentorInput, mentorUncheckedCreateWithoutInternal_mentorInput>
    connectOrCreate?: mentorCreateOrConnectWithoutInternal_mentorInput
    connect?: mentorWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutInternal_mentorInput = {
    create?: XOR<studentCreateWithoutInternal_mentorInput, studentUncheckedCreateWithoutInternal_mentorInput>
    connectOrCreate?: studentCreateOrConnectWithoutInternal_mentorInput
    connect?: studentWhereUniqueInput
  }

  export type mentorUpdateOneRequiredWithoutInternal_mentorNestedInput = {
    create?: XOR<mentorCreateWithoutInternal_mentorInput, mentorUncheckedCreateWithoutInternal_mentorInput>
    connectOrCreate?: mentorCreateOrConnectWithoutInternal_mentorInput
    upsert?: mentorUpsertWithoutInternal_mentorInput
    connect?: mentorWhereUniqueInput
    update?: XOR<XOR<mentorUpdateToOneWithWhereWithoutInternal_mentorInput, mentorUpdateWithoutInternal_mentorInput>, mentorUncheckedUpdateWithoutInternal_mentorInput>
  }

  export type studentUpdateOneWithoutInternal_mentorNestedInput = {
    create?: XOR<studentCreateWithoutInternal_mentorInput, studentUncheckedCreateWithoutInternal_mentorInput>
    connectOrCreate?: studentCreateOrConnectWithoutInternal_mentorInput
    upsert?: studentUpsertWithoutInternal_mentorInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutInternal_mentorInput, studentUpdateWithoutInternal_mentorInput>, studentUncheckedUpdateWithoutInternal_mentorInput>
  }

  export type external_mentorCreateNestedOneWithoutMentorInput = {
    create?: XOR<external_mentorCreateWithoutMentorInput, external_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: external_mentorCreateOrConnectWithoutMentorInput
    connect?: external_mentorWhereUniqueInput
  }

  export type internal_mentorCreateNestedOneWithoutMentorInput = {
    create?: XOR<internal_mentorCreateWithoutMentorInput, internal_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: internal_mentorCreateOrConnectWithoutMentorInput
    connect?: internal_mentorWhereUniqueInput
  }

  export type personCreateNestedOneWithoutMentorInput = {
    create?: XOR<personCreateWithoutMentorInput, personUncheckedCreateWithoutMentorInput>
    connectOrCreate?: personCreateOrConnectWithoutMentorInput
    connect?: personWhereUniqueInput
  }

  export type fieldt_courseCreateNestedOneWithoutMentorInput = {
    create?: XOR<fieldt_courseCreateWithoutMentorInput, fieldt_courseUncheckedCreateWithoutMentorInput>
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutMentorInput
    connect?: fieldt_courseWhereUniqueInput
  }

  export type external_mentorUncheckedCreateNestedOneWithoutMentorInput = {
    create?: XOR<external_mentorCreateWithoutMentorInput, external_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: external_mentorCreateOrConnectWithoutMentorInput
    connect?: external_mentorWhereUniqueInput
  }

  export type internal_mentorUncheckedCreateNestedOneWithoutMentorInput = {
    create?: XOR<internal_mentorCreateWithoutMentorInput, internal_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: internal_mentorCreateOrConnectWithoutMentorInput
    connect?: internal_mentorWhereUniqueInput
  }

  export type external_mentorUpdateOneWithoutMentorNestedInput = {
    create?: XOR<external_mentorCreateWithoutMentorInput, external_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: external_mentorCreateOrConnectWithoutMentorInput
    upsert?: external_mentorUpsertWithoutMentorInput
    disconnect?: external_mentorWhereInput | boolean
    delete?: external_mentorWhereInput | boolean
    connect?: external_mentorWhereUniqueInput
    update?: XOR<XOR<external_mentorUpdateToOneWithWhereWithoutMentorInput, external_mentorUpdateWithoutMentorInput>, external_mentorUncheckedUpdateWithoutMentorInput>
  }

  export type internal_mentorUpdateOneWithoutMentorNestedInput = {
    create?: XOR<internal_mentorCreateWithoutMentorInput, internal_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: internal_mentorCreateOrConnectWithoutMentorInput
    upsert?: internal_mentorUpsertWithoutMentorInput
    disconnect?: internal_mentorWhereInput | boolean
    delete?: internal_mentorWhereInput | boolean
    connect?: internal_mentorWhereUniqueInput
    update?: XOR<XOR<internal_mentorUpdateToOneWithWhereWithoutMentorInput, internal_mentorUpdateWithoutMentorInput>, internal_mentorUncheckedUpdateWithoutMentorInput>
  }

  export type personUpdateOneRequiredWithoutMentorNestedInput = {
    create?: XOR<personCreateWithoutMentorInput, personUncheckedCreateWithoutMentorInput>
    connectOrCreate?: personCreateOrConnectWithoutMentorInput
    upsert?: personUpsertWithoutMentorInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutMentorInput, personUpdateWithoutMentorInput>, personUncheckedUpdateWithoutMentorInput>
  }

  export type fieldt_courseUpdateOneWithoutMentorNestedInput = {
    create?: XOR<fieldt_courseCreateWithoutMentorInput, fieldt_courseUncheckedCreateWithoutMentorInput>
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutMentorInput
    upsert?: fieldt_courseUpsertWithoutMentorInput
    disconnect?: fieldt_courseWhereInput | boolean
    delete?: fieldt_courseWhereInput | boolean
    connect?: fieldt_courseWhereUniqueInput
    update?: XOR<XOR<fieldt_courseUpdateToOneWithWhereWithoutMentorInput, fieldt_courseUpdateWithoutMentorInput>, fieldt_courseUncheckedUpdateWithoutMentorInput>
  }

  export type external_mentorUncheckedUpdateOneWithoutMentorNestedInput = {
    create?: XOR<external_mentorCreateWithoutMentorInput, external_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: external_mentorCreateOrConnectWithoutMentorInput
    upsert?: external_mentorUpsertWithoutMentorInput
    disconnect?: external_mentorWhereInput | boolean
    delete?: external_mentorWhereInput | boolean
    connect?: external_mentorWhereUniqueInput
    update?: XOR<XOR<external_mentorUpdateToOneWithWhereWithoutMentorInput, external_mentorUpdateWithoutMentorInput>, external_mentorUncheckedUpdateWithoutMentorInput>
  }

  export type internal_mentorUncheckedUpdateOneWithoutMentorNestedInput = {
    create?: XOR<internal_mentorCreateWithoutMentorInput, internal_mentorUncheckedCreateWithoutMentorInput>
    connectOrCreate?: internal_mentorCreateOrConnectWithoutMentorInput
    upsert?: internal_mentorUpsertWithoutMentorInput
    disconnect?: internal_mentorWhereInput | boolean
    delete?: internal_mentorWhereInput | boolean
    connect?: internal_mentorWhereUniqueInput
    update?: XOR<XOR<internal_mentorUpdateToOneWithWhereWithoutMentorInput, internal_mentorUpdateWithoutMentorInput>, internal_mentorUncheckedUpdateWithoutMentorInput>
  }

  export type external_mentorCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<external_mentorCreateWithoutOrganizationInput, external_mentorUncheckedCreateWithoutOrganizationInput> | external_mentorCreateWithoutOrganizationInput[] | external_mentorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: external_mentorCreateOrConnectWithoutOrganizationInput | external_mentorCreateOrConnectWithoutOrganizationInput[]
    createMany?: external_mentorCreateManyOrganizationInputEnvelope
    connect?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
  }

  export type fieldt_courseCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<fieldt_courseCreateWithoutOrganizationInput, fieldt_courseUncheckedCreateWithoutOrganizationInput> | fieldt_courseCreateWithoutOrganizationInput[] | fieldt_courseUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutOrganizationInput | fieldt_courseCreateOrConnectWithoutOrganizationInput[]
    createMany?: fieldt_courseCreateManyOrganizationInputEnvelope
    connect?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
  }

  export type coordinatorCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<coordinatorCreateWithoutOrganizationInput, coordinatorUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: coordinatorCreateOrConnectWithoutOrganizationInput
    connect?: coordinatorWhereUniqueInput
  }

  export type external_mentorUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<external_mentorCreateWithoutOrganizationInput, external_mentorUncheckedCreateWithoutOrganizationInput> | external_mentorCreateWithoutOrganizationInput[] | external_mentorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: external_mentorCreateOrConnectWithoutOrganizationInput | external_mentorCreateOrConnectWithoutOrganizationInput[]
    createMany?: external_mentorCreateManyOrganizationInputEnvelope
    connect?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
  }

  export type fieldt_courseUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<fieldt_courseCreateWithoutOrganizationInput, fieldt_courseUncheckedCreateWithoutOrganizationInput> | fieldt_courseCreateWithoutOrganizationInput[] | fieldt_courseUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutOrganizationInput | fieldt_courseCreateOrConnectWithoutOrganizationInput[]
    createMany?: fieldt_courseCreateManyOrganizationInputEnvelope
    connect?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
  }

  export type external_mentorUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<external_mentorCreateWithoutOrganizationInput, external_mentorUncheckedCreateWithoutOrganizationInput> | external_mentorCreateWithoutOrganizationInput[] | external_mentorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: external_mentorCreateOrConnectWithoutOrganizationInput | external_mentorCreateOrConnectWithoutOrganizationInput[]
    upsert?: external_mentorUpsertWithWhereUniqueWithoutOrganizationInput | external_mentorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: external_mentorCreateManyOrganizationInputEnvelope
    set?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    disconnect?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    delete?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    connect?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    update?: external_mentorUpdateWithWhereUniqueWithoutOrganizationInput | external_mentorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: external_mentorUpdateManyWithWhereWithoutOrganizationInput | external_mentorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: external_mentorScalarWhereInput | external_mentorScalarWhereInput[]
  }

  export type fieldt_courseUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<fieldt_courseCreateWithoutOrganizationInput, fieldt_courseUncheckedCreateWithoutOrganizationInput> | fieldt_courseCreateWithoutOrganizationInput[] | fieldt_courseUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutOrganizationInput | fieldt_courseCreateOrConnectWithoutOrganizationInput[]
    upsert?: fieldt_courseUpsertWithWhereUniqueWithoutOrganizationInput | fieldt_courseUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: fieldt_courseCreateManyOrganizationInputEnvelope
    set?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    disconnect?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    delete?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    connect?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    update?: fieldt_courseUpdateWithWhereUniqueWithoutOrganizationInput | fieldt_courseUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: fieldt_courseUpdateManyWithWhereWithoutOrganizationInput | fieldt_courseUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: fieldt_courseScalarWhereInput | fieldt_courseScalarWhereInput[]
  }

  export type coordinatorUpdateOneWithoutOrganizationNestedInput = {
    create?: XOR<coordinatorCreateWithoutOrganizationInput, coordinatorUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: coordinatorCreateOrConnectWithoutOrganizationInput
    upsert?: coordinatorUpsertWithoutOrganizationInput
    disconnect?: coordinatorWhereInput | boolean
    delete?: coordinatorWhereInput | boolean
    connect?: coordinatorWhereUniqueInput
    update?: XOR<XOR<coordinatorUpdateToOneWithWhereWithoutOrganizationInput, coordinatorUpdateWithoutOrganizationInput>, coordinatorUncheckedUpdateWithoutOrganizationInput>
  }

  export type external_mentorUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<external_mentorCreateWithoutOrganizationInput, external_mentorUncheckedCreateWithoutOrganizationInput> | external_mentorCreateWithoutOrganizationInput[] | external_mentorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: external_mentorCreateOrConnectWithoutOrganizationInput | external_mentorCreateOrConnectWithoutOrganizationInput[]
    upsert?: external_mentorUpsertWithWhereUniqueWithoutOrganizationInput | external_mentorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: external_mentorCreateManyOrganizationInputEnvelope
    set?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    disconnect?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    delete?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    connect?: external_mentorWhereUniqueInput | external_mentorWhereUniqueInput[]
    update?: external_mentorUpdateWithWhereUniqueWithoutOrganizationInput | external_mentorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: external_mentorUpdateManyWithWhereWithoutOrganizationInput | external_mentorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: external_mentorScalarWhereInput | external_mentorScalarWhereInput[]
  }

  export type fieldt_courseUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<fieldt_courseCreateWithoutOrganizationInput, fieldt_courseUncheckedCreateWithoutOrganizationInput> | fieldt_courseCreateWithoutOrganizationInput[] | fieldt_courseUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: fieldt_courseCreateOrConnectWithoutOrganizationInput | fieldt_courseCreateOrConnectWithoutOrganizationInput[]
    upsert?: fieldt_courseUpsertWithWhereUniqueWithoutOrganizationInput | fieldt_courseUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: fieldt_courseCreateManyOrganizationInputEnvelope
    set?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    disconnect?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    delete?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    connect?: fieldt_courseWhereUniqueInput | fieldt_courseWhereUniqueInput[]
    update?: fieldt_courseUpdateWithWhereUniqueWithoutOrganizationInput | fieldt_courseUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: fieldt_courseUpdateManyWithWhereWithoutOrganizationInput | fieldt_courseUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: fieldt_courseScalarWhereInput | fieldt_courseScalarWhereInput[]
  }

  export type employeeCreateNestedOneWithoutPersonInput = {
    create?: XOR<employeeCreateWithoutPersonInput, employeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: employeeCreateOrConnectWithoutPersonInput
    connect?: employeeWhereUniqueInput
  }

  export type mentorCreateNestedOneWithoutPersonInput = {
    create?: XOR<mentorCreateWithoutPersonInput, mentorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: mentorCreateOrConnectWithoutPersonInput
    connect?: mentorWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutPersonInput = {
    create?: XOR<studentCreateWithoutPersonInput, studentUncheckedCreateWithoutPersonInput>
    connectOrCreate?: studentCreateOrConnectWithoutPersonInput
    connect?: studentWhereUniqueInput
  }

  export type employeeUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<employeeCreateWithoutPersonInput, employeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: employeeCreateOrConnectWithoutPersonInput
    connect?: employeeWhereUniqueInput
  }

  export type mentorUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<mentorCreateWithoutPersonInput, mentorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: mentorCreateOrConnectWithoutPersonInput
    connect?: mentorWhereUniqueInput
  }

  export type studentUncheckedCreateNestedOneWithoutPersonInput = {
    create?: XOR<studentCreateWithoutPersonInput, studentUncheckedCreateWithoutPersonInput>
    connectOrCreate?: studentCreateOrConnectWithoutPersonInput
    connect?: studentWhereUniqueInput
  }

  export type employeeUpdateOneWithoutPersonNestedInput = {
    create?: XOR<employeeCreateWithoutPersonInput, employeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: employeeCreateOrConnectWithoutPersonInput
    upsert?: employeeUpsertWithoutPersonInput
    disconnect?: employeeWhereInput | boolean
    delete?: employeeWhereInput | boolean
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutPersonInput, employeeUpdateWithoutPersonInput>, employeeUncheckedUpdateWithoutPersonInput>
  }

  export type mentorUpdateOneWithoutPersonNestedInput = {
    create?: XOR<mentorCreateWithoutPersonInput, mentorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: mentorCreateOrConnectWithoutPersonInput
    upsert?: mentorUpsertWithoutPersonInput
    disconnect?: mentorWhereInput | boolean
    delete?: mentorWhereInput | boolean
    connect?: mentorWhereUniqueInput
    update?: XOR<XOR<mentorUpdateToOneWithWhereWithoutPersonInput, mentorUpdateWithoutPersonInput>, mentorUncheckedUpdateWithoutPersonInput>
  }

  export type studentUpdateOneWithoutPersonNestedInput = {
    create?: XOR<studentCreateWithoutPersonInput, studentUncheckedCreateWithoutPersonInput>
    connectOrCreate?: studentCreateOrConnectWithoutPersonInput
    upsert?: studentUpsertWithoutPersonInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutPersonInput, studentUpdateWithoutPersonInput>, studentUncheckedUpdateWithoutPersonInput>
  }

  export type employeeUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<employeeCreateWithoutPersonInput, employeeUncheckedCreateWithoutPersonInput>
    connectOrCreate?: employeeCreateOrConnectWithoutPersonInput
    upsert?: employeeUpsertWithoutPersonInput
    disconnect?: employeeWhereInput | boolean
    delete?: employeeWhereInput | boolean
    connect?: employeeWhereUniqueInput
    update?: XOR<XOR<employeeUpdateToOneWithWhereWithoutPersonInput, employeeUpdateWithoutPersonInput>, employeeUncheckedUpdateWithoutPersonInput>
  }

  export type mentorUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<mentorCreateWithoutPersonInput, mentorUncheckedCreateWithoutPersonInput>
    connectOrCreate?: mentorCreateOrConnectWithoutPersonInput
    upsert?: mentorUpsertWithoutPersonInput
    disconnect?: mentorWhereInput | boolean
    delete?: mentorWhereInput | boolean
    connect?: mentorWhereUniqueInput
    update?: XOR<XOR<mentorUpdateToOneWithWhereWithoutPersonInput, mentorUpdateWithoutPersonInput>, mentorUncheckedUpdateWithoutPersonInput>
  }

  export type studentUncheckedUpdateOneWithoutPersonNestedInput = {
    create?: XOR<studentCreateWithoutPersonInput, studentUncheckedCreateWithoutPersonInput>
    connectOrCreate?: studentCreateOrConnectWithoutPersonInput
    upsert?: studentUpsertWithoutPersonInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutPersonInput, studentUpdateWithoutPersonInput>, studentUncheckedUpdateWithoutPersonInput>
  }

  export type enrollCreateNestedManyWithoutStudentInput = {
    create?: XOR<enrollCreateWithoutStudentInput, enrollUncheckedCreateWithoutStudentInput> | enrollCreateWithoutStudentInput[] | enrollUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutStudentInput | enrollCreateOrConnectWithoutStudentInput[]
    createMany?: enrollCreateManyStudentInputEnvelope
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
  }

  export type enrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type internal_mentorCreateNestedManyWithoutStudentInput = {
    create?: XOR<internal_mentorCreateWithoutStudentInput, internal_mentorUncheckedCreateWithoutStudentInput> | internal_mentorCreateWithoutStudentInput[] | internal_mentorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: internal_mentorCreateOrConnectWithoutStudentInput | internal_mentorCreateOrConnectWithoutStudentInput[]
    createMany?: internal_mentorCreateManyStudentInputEnvelope
    connect?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
  }

  export type personCreateNestedOneWithoutStudentInput = {
    create?: XOR<personCreateWithoutStudentInput, personUncheckedCreateWithoutStudentInput>
    connectOrCreate?: personCreateOrConnectWithoutStudentInput
    connect?: personWhereUniqueInput
  }

  export type enrollUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<enrollCreateWithoutStudentInput, enrollUncheckedCreateWithoutStudentInput> | enrollCreateWithoutStudentInput[] | enrollUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutStudentInput | enrollCreateOrConnectWithoutStudentInput[]
    createMany?: enrollCreateManyStudentInputEnvelope
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
  }

  export type enrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type internal_mentorUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<internal_mentorCreateWithoutStudentInput, internal_mentorUncheckedCreateWithoutStudentInput> | internal_mentorCreateWithoutStudentInput[] | internal_mentorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: internal_mentorCreateOrConnectWithoutStudentInput | internal_mentorCreateOrConnectWithoutStudentInput[]
    createMany?: internal_mentorCreateManyStudentInputEnvelope
    connect?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
  }

  export type enrollUpdateManyWithoutStudentNestedInput = {
    create?: XOR<enrollCreateWithoutStudentInput, enrollUncheckedCreateWithoutStudentInput> | enrollCreateWithoutStudentInput[] | enrollUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutStudentInput | enrollCreateOrConnectWithoutStudentInput[]
    upsert?: enrollUpsertWithWhereUniqueWithoutStudentInput | enrollUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: enrollCreateManyStudentInputEnvelope
    set?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    disconnect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    delete?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    update?: enrollUpdateWithWhereUniqueWithoutStudentInput | enrollUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: enrollUpdateManyWithWhereWithoutStudentInput | enrollUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: enrollScalarWhereInput | enrollScalarWhereInput[]
  }

  export type enrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutStudentInput | enrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutStudentInput | enrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutStudentInput | enrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type internal_mentorUpdateManyWithoutStudentNestedInput = {
    create?: XOR<internal_mentorCreateWithoutStudentInput, internal_mentorUncheckedCreateWithoutStudentInput> | internal_mentorCreateWithoutStudentInput[] | internal_mentorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: internal_mentorCreateOrConnectWithoutStudentInput | internal_mentorCreateOrConnectWithoutStudentInput[]
    upsert?: internal_mentorUpsertWithWhereUniqueWithoutStudentInput | internal_mentorUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: internal_mentorCreateManyStudentInputEnvelope
    set?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    disconnect?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    delete?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    connect?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    update?: internal_mentorUpdateWithWhereUniqueWithoutStudentInput | internal_mentorUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: internal_mentorUpdateManyWithWhereWithoutStudentInput | internal_mentorUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: internal_mentorScalarWhereInput | internal_mentorScalarWhereInput[]
  }

  export type personUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<personCreateWithoutStudentInput, personUncheckedCreateWithoutStudentInput>
    connectOrCreate?: personCreateOrConnectWithoutStudentInput
    upsert?: personUpsertWithoutStudentInput
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutStudentInput, personUpdateWithoutStudentInput>, personUncheckedUpdateWithoutStudentInput>
  }

  export type enrollUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<enrollCreateWithoutStudentInput, enrollUncheckedCreateWithoutStudentInput> | enrollCreateWithoutStudentInput[] | enrollUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollCreateOrConnectWithoutStudentInput | enrollCreateOrConnectWithoutStudentInput[]
    upsert?: enrollUpsertWithWhereUniqueWithoutStudentInput | enrollUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: enrollCreateManyStudentInputEnvelope
    set?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    disconnect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    delete?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    connect?: enrollWhereUniqueInput | enrollWhereUniqueInput[]
    update?: enrollUpdateWithWhereUniqueWithoutStudentInput | enrollUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: enrollUpdateManyWithWhereWithoutStudentInput | enrollUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: enrollScalarWhereInput | enrollScalarWhereInput[]
  }

  export type enrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput> | enrollmentCreateWithoutStudentInput[] | enrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutStudentInput | enrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutStudentInput | enrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: enrollmentCreateManyStudentInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutStudentInput | enrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutStudentInput | enrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type internal_mentorUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<internal_mentorCreateWithoutStudentInput, internal_mentorUncheckedCreateWithoutStudentInput> | internal_mentorCreateWithoutStudentInput[] | internal_mentorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: internal_mentorCreateOrConnectWithoutStudentInput | internal_mentorCreateOrConnectWithoutStudentInput[]
    upsert?: internal_mentorUpsertWithWhereUniqueWithoutStudentInput | internal_mentorUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: internal_mentorCreateManyStudentInputEnvelope
    set?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    disconnect?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    delete?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    connect?: internal_mentorWhereUniqueInput | internal_mentorWhereUniqueInput[]
    update?: internal_mentorUpdateWithWhereUniqueWithoutStudentInput | internal_mentorUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: internal_mentorUpdateManyWithWhereWithoutStudentInput | internal_mentorUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: internal_mentorScalarWhereInput | internal_mentorScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type enrollmentCreateWithoutCoordinatorInput = {
    Enrollment_id: number
    Semester?: string | null
    Final_grade?: string | null
    student?: studentCreateNestedOneWithoutEnrollmentInput
    fieldt_course?: fieldt_courseCreateNestedOneWithoutEnrollmentInput
  }

  export type enrollmentUncheckedCreateWithoutCoordinatorInput = {
    Enrollment_id: number
    Student_id?: number | null
    Course_id?: string | null
    Semester?: string | null
    Final_grade?: string | null
  }

  export type enrollmentCreateOrConnectWithoutCoordinatorInput = {
    where: enrollmentWhereUniqueInput
    create: XOR<enrollmentCreateWithoutCoordinatorInput, enrollmentUncheckedCreateWithoutCoordinatorInput>
  }

  export type enrollmentCreateManyCoordinatorInputEnvelope = {
    data: enrollmentCreateManyCoordinatorInput | enrollmentCreateManyCoordinatorInput[]
    skipDuplicates?: boolean
  }

  export type organizationCreateWithoutCoordinatorInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    external_mentor?: external_mentorCreateNestedManyWithoutOrganizationInput
    fieldt_course?: fieldt_courseCreateNestedManyWithoutOrganizationInput
  }

  export type organizationUncheckedCreateWithoutCoordinatorInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    external_mentor?: external_mentorUncheckedCreateNestedManyWithoutOrganizationInput
    fieldt_course?: fieldt_courseUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationCreateOrConnectWithoutCoordinatorInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutCoordinatorInput, organizationUncheckedCreateWithoutCoordinatorInput>
  }

  export type organizationCreateManyCoordinatorInputEnvelope = {
    data: organizationCreateManyCoordinatorInput | organizationCreateManyCoordinatorInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentUpsertWithWhereUniqueWithoutCoordinatorInput = {
    where: enrollmentWhereUniqueInput
    update: XOR<enrollmentUpdateWithoutCoordinatorInput, enrollmentUncheckedUpdateWithoutCoordinatorInput>
    create: XOR<enrollmentCreateWithoutCoordinatorInput, enrollmentUncheckedCreateWithoutCoordinatorInput>
  }

  export type enrollmentUpdateWithWhereUniqueWithoutCoordinatorInput = {
    where: enrollmentWhereUniqueInput
    data: XOR<enrollmentUpdateWithoutCoordinatorInput, enrollmentUncheckedUpdateWithoutCoordinatorInput>
  }

  export type enrollmentUpdateManyWithWhereWithoutCoordinatorInput = {
    where: enrollmentScalarWhereInput
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutCoordinatorInput>
  }

  export type enrollmentScalarWhereInput = {
    AND?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
    OR?: enrollmentScalarWhereInput[]
    NOT?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
    Enrollment_id?: IntFilter<"enrollment"> | number
    Student_id?: IntNullableFilter<"enrollment"> | number | null
    Course_id?: StringNullableFilter<"enrollment"> | string | null
    Semester?: StringNullableFilter<"enrollment"> | string | null
    Final_grade?: StringNullableFilter<"enrollment"> | string | null
    Coordinator_id?: IntNullableFilter<"enrollment"> | number | null
  }

  export type organizationUpsertWithWhereUniqueWithoutCoordinatorInput = {
    where: organizationWhereUniqueInput
    update: XOR<organizationUpdateWithoutCoordinatorInput, organizationUncheckedUpdateWithoutCoordinatorInput>
    create: XOR<organizationCreateWithoutCoordinatorInput, organizationUncheckedCreateWithoutCoordinatorInput>
  }

  export type organizationUpdateWithWhereUniqueWithoutCoordinatorInput = {
    where: organizationWhereUniqueInput
    data: XOR<organizationUpdateWithoutCoordinatorInput, organizationUncheckedUpdateWithoutCoordinatorInput>
  }

  export type organizationUpdateManyWithWhereWithoutCoordinatorInput = {
    where: organizationScalarWhereInput
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyWithoutCoordinatorInput>
  }

  export type organizationScalarWhereInput = {
    AND?: organizationScalarWhereInput | organizationScalarWhereInput[]
    OR?: organizationScalarWhereInput[]
    NOT?: organizationScalarWhereInput | organizationScalarWhereInput[]
    Org_id?: IntFilter<"organization"> | number
    Name?: StringFilter<"organization"> | string
    Contact_info?: StringFilter<"organization"> | string
    Approval_Status?: StringNullableFilter<"organization"> | string | null
    Coordinator_id?: IntNullableFilter<"organization"> | number | null
  }

  export type personCreateWithoutEmployeeInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    mentor?: mentorCreateNestedOneWithoutPersonInput
    student?: studentCreateNestedOneWithoutPersonInput
  }

  export type personUncheckedCreateWithoutEmployeeInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    mentor?: mentorUncheckedCreateNestedOneWithoutPersonInput
    student?: studentUncheckedCreateNestedOneWithoutPersonInput
  }

  export type personCreateOrConnectWithoutEmployeeInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutEmployeeInput, personUncheckedCreateWithoutEmployeeInput>
  }

  export type personUpsertWithoutEmployeeInput = {
    update: XOR<personUpdateWithoutEmployeeInput, personUncheckedUpdateWithoutEmployeeInput>
    create: XOR<personCreateWithoutEmployeeInput, personUncheckedCreateWithoutEmployeeInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutEmployeeInput, personUncheckedUpdateWithoutEmployeeInput>
  }

  export type personUpdateWithoutEmployeeInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    mentor?: mentorUpdateOneWithoutPersonNestedInput
    student?: studentUpdateOneWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutEmployeeInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    mentor?: mentorUncheckedUpdateOneWithoutPersonNestedInput
    student?: studentUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type studentCreateWithoutEnrollInput = {
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorCreateNestedManyWithoutStudentInput
    person: personCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutEnrollInput = {
    Student_id: number
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutEnrollInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutEnrollInput, studentUncheckedCreateWithoutEnrollInput>
  }

  export type fieldt_courseCreateWithoutEnrollInput = {
    Course_id: string
    Name: string
    Duration: string
    enrollment?: enrollmentCreateNestedManyWithoutFieldt_courseInput
    organization?: organizationCreateNestedOneWithoutFieldt_courseInput
    mentor?: mentorCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseUncheckedCreateWithoutEnrollInput = {
    Course_id: string
    Name: string
    Duration: string
    Org_id?: number | null
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutFieldt_courseInput
    mentor?: mentorUncheckedCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseCreateOrConnectWithoutEnrollInput = {
    where: fieldt_courseWhereUniqueInput
    create: XOR<fieldt_courseCreateWithoutEnrollInput, fieldt_courseUncheckedCreateWithoutEnrollInput>
  }

  export type studentUpsertWithoutEnrollInput = {
    update: XOR<studentUpdateWithoutEnrollInput, studentUncheckedUpdateWithoutEnrollInput>
    create: XOR<studentCreateWithoutEnrollInput, studentUncheckedCreateWithoutEnrollInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutEnrollInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutEnrollInput, studentUncheckedUpdateWithoutEnrollInput>
  }

  export type studentUpdateWithoutEnrollInput = {
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUpdateManyWithoutStudentNestedInput
    person?: personUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutEnrollInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type fieldt_courseUpsertWithoutEnrollInput = {
    update: XOR<fieldt_courseUpdateWithoutEnrollInput, fieldt_courseUncheckedUpdateWithoutEnrollInput>
    create: XOR<fieldt_courseCreateWithoutEnrollInput, fieldt_courseUncheckedCreateWithoutEnrollInput>
    where?: fieldt_courseWhereInput
  }

  export type fieldt_courseUpdateToOneWithWhereWithoutEnrollInput = {
    where?: fieldt_courseWhereInput
    data: XOR<fieldt_courseUpdateWithoutEnrollInput, fieldt_courseUncheckedUpdateWithoutEnrollInput>
  }

  export type fieldt_courseUpdateWithoutEnrollInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    enrollment?: enrollmentUpdateManyWithoutFieldt_courseNestedInput
    organization?: organizationUpdateOneWithoutFieldt_courseNestedInput
    mentor?: mentorUpdateManyWithoutFieldt_courseNestedInput
  }

  export type fieldt_courseUncheckedUpdateWithoutEnrollInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrollment?: enrollmentUncheckedUpdateManyWithoutFieldt_courseNestedInput
    mentor?: mentorUncheckedUpdateManyWithoutFieldt_courseNestedInput
  }

  export type studentCreateWithoutEnrollmentInput = {
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorCreateNestedManyWithoutStudentInput
    person: personCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutEnrollmentInput = {
    Student_id: number
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollUncheckedCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutEnrollmentInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
  }

  export type fieldt_courseCreateWithoutEnrollmentInput = {
    Course_id: string
    Name: string
    Duration: string
    enroll?: enrollCreateNestedManyWithoutFieldt_courseInput
    organization?: organizationCreateNestedOneWithoutFieldt_courseInput
    mentor?: mentorCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseUncheckedCreateWithoutEnrollmentInput = {
    Course_id: string
    Name: string
    Duration: string
    Org_id?: number | null
    enroll?: enrollUncheckedCreateNestedManyWithoutFieldt_courseInput
    mentor?: mentorUncheckedCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseCreateOrConnectWithoutEnrollmentInput = {
    where: fieldt_courseWhereUniqueInput
    create: XOR<fieldt_courseCreateWithoutEnrollmentInput, fieldt_courseUncheckedCreateWithoutEnrollmentInput>
  }

  export type coordinatorCreateWithoutEnrollmentInput = {
    Coordinator_id: number
    Name?: string | null
    organization?: organizationCreateNestedManyWithoutCoordinatorInput
  }

  export type coordinatorUncheckedCreateWithoutEnrollmentInput = {
    Coordinator_id: number
    Name?: string | null
    organization?: organizationUncheckedCreateNestedManyWithoutCoordinatorInput
  }

  export type coordinatorCreateOrConnectWithoutEnrollmentInput = {
    where: coordinatorWhereUniqueInput
    create: XOR<coordinatorCreateWithoutEnrollmentInput, coordinatorUncheckedCreateWithoutEnrollmentInput>
  }

  export type studentUpsertWithoutEnrollmentInput = {
    update: XOR<studentUpdateWithoutEnrollmentInput, studentUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<studentCreateWithoutEnrollmentInput, studentUncheckedCreateWithoutEnrollmentInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutEnrollmentInput, studentUncheckedUpdateWithoutEnrollmentInput>
  }

  export type studentUpdateWithoutEnrollmentInput = {
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUpdateManyWithoutStudentNestedInput
    person?: personUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutEnrollmentInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUncheckedUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type fieldt_courseUpsertWithoutEnrollmentInput = {
    update: XOR<fieldt_courseUpdateWithoutEnrollmentInput, fieldt_courseUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<fieldt_courseCreateWithoutEnrollmentInput, fieldt_courseUncheckedCreateWithoutEnrollmentInput>
    where?: fieldt_courseWhereInput
  }

  export type fieldt_courseUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: fieldt_courseWhereInput
    data: XOR<fieldt_courseUpdateWithoutEnrollmentInput, fieldt_courseUncheckedUpdateWithoutEnrollmentInput>
  }

  export type fieldt_courseUpdateWithoutEnrollmentInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    enroll?: enrollUpdateManyWithoutFieldt_courseNestedInput
    organization?: organizationUpdateOneWithoutFieldt_courseNestedInput
    mentor?: mentorUpdateManyWithoutFieldt_courseNestedInput
  }

  export type fieldt_courseUncheckedUpdateWithoutEnrollmentInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUncheckedUpdateManyWithoutFieldt_courseNestedInput
    mentor?: mentorUncheckedUpdateManyWithoutFieldt_courseNestedInput
  }

  export type coordinatorUpsertWithoutEnrollmentInput = {
    update: XOR<coordinatorUpdateWithoutEnrollmentInput, coordinatorUncheckedUpdateWithoutEnrollmentInput>
    create: XOR<coordinatorCreateWithoutEnrollmentInput, coordinatorUncheckedCreateWithoutEnrollmentInput>
    where?: coordinatorWhereInput
  }

  export type coordinatorUpdateToOneWithWhereWithoutEnrollmentInput = {
    where?: coordinatorWhereInput
    data: XOR<coordinatorUpdateWithoutEnrollmentInput, coordinatorUncheckedUpdateWithoutEnrollmentInput>
  }

  export type coordinatorUpdateWithoutEnrollmentInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: organizationUpdateManyWithoutCoordinatorNestedInput
  }

  export type coordinatorUncheckedUpdateWithoutEnrollmentInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: organizationUncheckedUpdateManyWithoutCoordinatorNestedInput
  }

  export type mentorCreateWithoutExternal_mentorInput = {
    internal_mentor?: internal_mentorCreateNestedOneWithoutMentorInput
    person: personCreateNestedOneWithoutMentorInput
    fieldt_course?: fieldt_courseCreateNestedOneWithoutMentorInput
  }

  export type mentorUncheckedCreateWithoutExternal_mentorInput = {
    Mentor_id: number
    Course_id?: string | null
    internal_mentor?: internal_mentorUncheckedCreateNestedOneWithoutMentorInput
  }

  export type mentorCreateOrConnectWithoutExternal_mentorInput = {
    where: mentorWhereUniqueInput
    create: XOR<mentorCreateWithoutExternal_mentorInput, mentorUncheckedCreateWithoutExternal_mentorInput>
  }

  export type organizationCreateWithoutExternal_mentorInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    fieldt_course?: fieldt_courseCreateNestedManyWithoutOrganizationInput
    coordinator?: coordinatorCreateNestedOneWithoutOrganizationInput
  }

  export type organizationUncheckedCreateWithoutExternal_mentorInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    Coordinator_id?: number | null
    fieldt_course?: fieldt_courseUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationCreateOrConnectWithoutExternal_mentorInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutExternal_mentorInput, organizationUncheckedCreateWithoutExternal_mentorInput>
  }

  export type mentorUpsertWithoutExternal_mentorInput = {
    update: XOR<mentorUpdateWithoutExternal_mentorInput, mentorUncheckedUpdateWithoutExternal_mentorInput>
    create: XOR<mentorCreateWithoutExternal_mentorInput, mentorUncheckedCreateWithoutExternal_mentorInput>
    where?: mentorWhereInput
  }

  export type mentorUpdateToOneWithWhereWithoutExternal_mentorInput = {
    where?: mentorWhereInput
    data: XOR<mentorUpdateWithoutExternal_mentorInput, mentorUncheckedUpdateWithoutExternal_mentorInput>
  }

  export type mentorUpdateWithoutExternal_mentorInput = {
    internal_mentor?: internal_mentorUpdateOneWithoutMentorNestedInput
    person?: personUpdateOneRequiredWithoutMentorNestedInput
    fieldt_course?: fieldt_courseUpdateOneWithoutMentorNestedInput
  }

  export type mentorUncheckedUpdateWithoutExternal_mentorInput = {
    Mentor_id?: IntFieldUpdateOperationsInput | number
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    internal_mentor?: internal_mentorUncheckedUpdateOneWithoutMentorNestedInput
  }

  export type organizationUpsertWithoutExternal_mentorInput = {
    update: XOR<organizationUpdateWithoutExternal_mentorInput, organizationUncheckedUpdateWithoutExternal_mentorInput>
    create: XOR<organizationCreateWithoutExternal_mentorInput, organizationUncheckedCreateWithoutExternal_mentorInput>
    where?: organizationWhereInput
  }

  export type organizationUpdateToOneWithWhereWithoutExternal_mentorInput = {
    where?: organizationWhereInput
    data: XOR<organizationUpdateWithoutExternal_mentorInput, organizationUncheckedUpdateWithoutExternal_mentorInput>
  }

  export type organizationUpdateWithoutExternal_mentorInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    fieldt_course?: fieldt_courseUpdateManyWithoutOrganizationNestedInput
    coordinator?: coordinatorUpdateOneWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateWithoutExternal_mentorInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
    fieldt_course?: fieldt_courseUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type enrollCreateWithoutFieldt_courseInput = {
    student: studentCreateNestedOneWithoutEnrollInput
  }

  export type enrollUncheckedCreateWithoutFieldt_courseInput = {
    Student_id: number
  }

  export type enrollCreateOrConnectWithoutFieldt_courseInput = {
    where: enrollWhereUniqueInput
    create: XOR<enrollCreateWithoutFieldt_courseInput, enrollUncheckedCreateWithoutFieldt_courseInput>
  }

  export type enrollCreateManyFieldt_courseInputEnvelope = {
    data: enrollCreateManyFieldt_courseInput | enrollCreateManyFieldt_courseInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentCreateWithoutFieldt_courseInput = {
    Enrollment_id: number
    Semester?: string | null
    Final_grade?: string | null
    student?: studentCreateNestedOneWithoutEnrollmentInput
    coordinator?: coordinatorCreateNestedOneWithoutEnrollmentInput
  }

  export type enrollmentUncheckedCreateWithoutFieldt_courseInput = {
    Enrollment_id: number
    Student_id?: number | null
    Semester?: string | null
    Final_grade?: string | null
    Coordinator_id?: number | null
  }

  export type enrollmentCreateOrConnectWithoutFieldt_courseInput = {
    where: enrollmentWhereUniqueInput
    create: XOR<enrollmentCreateWithoutFieldt_courseInput, enrollmentUncheckedCreateWithoutFieldt_courseInput>
  }

  export type enrollmentCreateManyFieldt_courseInputEnvelope = {
    data: enrollmentCreateManyFieldt_courseInput | enrollmentCreateManyFieldt_courseInput[]
    skipDuplicates?: boolean
  }

  export type organizationCreateWithoutFieldt_courseInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    external_mentor?: external_mentorCreateNestedManyWithoutOrganizationInput
    coordinator?: coordinatorCreateNestedOneWithoutOrganizationInput
  }

  export type organizationUncheckedCreateWithoutFieldt_courseInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
    Coordinator_id?: number | null
    external_mentor?: external_mentorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type organizationCreateOrConnectWithoutFieldt_courseInput = {
    where: organizationWhereUniqueInput
    create: XOR<organizationCreateWithoutFieldt_courseInput, organizationUncheckedCreateWithoutFieldt_courseInput>
  }

  export type mentorCreateWithoutFieldt_courseInput = {
    external_mentor?: external_mentorCreateNestedOneWithoutMentorInput
    internal_mentor?: internal_mentorCreateNestedOneWithoutMentorInput
    person: personCreateNestedOneWithoutMentorInput
  }

  export type mentorUncheckedCreateWithoutFieldt_courseInput = {
    Mentor_id: number
    external_mentor?: external_mentorUncheckedCreateNestedOneWithoutMentorInput
    internal_mentor?: internal_mentorUncheckedCreateNestedOneWithoutMentorInput
  }

  export type mentorCreateOrConnectWithoutFieldt_courseInput = {
    where: mentorWhereUniqueInput
    create: XOR<mentorCreateWithoutFieldt_courseInput, mentorUncheckedCreateWithoutFieldt_courseInput>
  }

  export type mentorCreateManyFieldt_courseInputEnvelope = {
    data: mentorCreateManyFieldt_courseInput | mentorCreateManyFieldt_courseInput[]
    skipDuplicates?: boolean
  }

  export type enrollUpsertWithWhereUniqueWithoutFieldt_courseInput = {
    where: enrollWhereUniqueInput
    update: XOR<enrollUpdateWithoutFieldt_courseInput, enrollUncheckedUpdateWithoutFieldt_courseInput>
    create: XOR<enrollCreateWithoutFieldt_courseInput, enrollUncheckedCreateWithoutFieldt_courseInput>
  }

  export type enrollUpdateWithWhereUniqueWithoutFieldt_courseInput = {
    where: enrollWhereUniqueInput
    data: XOR<enrollUpdateWithoutFieldt_courseInput, enrollUncheckedUpdateWithoutFieldt_courseInput>
  }

  export type enrollUpdateManyWithWhereWithoutFieldt_courseInput = {
    where: enrollScalarWhereInput
    data: XOR<enrollUpdateManyMutationInput, enrollUncheckedUpdateManyWithoutFieldt_courseInput>
  }

  export type enrollScalarWhereInput = {
    AND?: enrollScalarWhereInput | enrollScalarWhereInput[]
    OR?: enrollScalarWhereInput[]
    NOT?: enrollScalarWhereInput | enrollScalarWhereInput[]
    Student_id?: IntFilter<"enroll"> | number
    Course_id?: StringFilter<"enroll"> | string
  }

  export type enrollmentUpsertWithWhereUniqueWithoutFieldt_courseInput = {
    where: enrollmentWhereUniqueInput
    update: XOR<enrollmentUpdateWithoutFieldt_courseInput, enrollmentUncheckedUpdateWithoutFieldt_courseInput>
    create: XOR<enrollmentCreateWithoutFieldt_courseInput, enrollmentUncheckedCreateWithoutFieldt_courseInput>
  }

  export type enrollmentUpdateWithWhereUniqueWithoutFieldt_courseInput = {
    where: enrollmentWhereUniqueInput
    data: XOR<enrollmentUpdateWithoutFieldt_courseInput, enrollmentUncheckedUpdateWithoutFieldt_courseInput>
  }

  export type enrollmentUpdateManyWithWhereWithoutFieldt_courseInput = {
    where: enrollmentScalarWhereInput
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutFieldt_courseInput>
  }

  export type organizationUpsertWithoutFieldt_courseInput = {
    update: XOR<organizationUpdateWithoutFieldt_courseInput, organizationUncheckedUpdateWithoutFieldt_courseInput>
    create: XOR<organizationCreateWithoutFieldt_courseInput, organizationUncheckedCreateWithoutFieldt_courseInput>
    where?: organizationWhereInput
  }

  export type organizationUpdateToOneWithWhereWithoutFieldt_courseInput = {
    where?: organizationWhereInput
    data: XOR<organizationUpdateWithoutFieldt_courseInput, organizationUncheckedUpdateWithoutFieldt_courseInput>
  }

  export type organizationUpdateWithoutFieldt_courseInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    external_mentor?: external_mentorUpdateManyWithoutOrganizationNestedInput
    coordinator?: coordinatorUpdateOneWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateWithoutFieldt_courseInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
    external_mentor?: external_mentorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type mentorUpsertWithWhereUniqueWithoutFieldt_courseInput = {
    where: mentorWhereUniqueInput
    update: XOR<mentorUpdateWithoutFieldt_courseInput, mentorUncheckedUpdateWithoutFieldt_courseInput>
    create: XOR<mentorCreateWithoutFieldt_courseInput, mentorUncheckedCreateWithoutFieldt_courseInput>
  }

  export type mentorUpdateWithWhereUniqueWithoutFieldt_courseInput = {
    where: mentorWhereUniqueInput
    data: XOR<mentorUpdateWithoutFieldt_courseInput, mentorUncheckedUpdateWithoutFieldt_courseInput>
  }

  export type mentorUpdateManyWithWhereWithoutFieldt_courseInput = {
    where: mentorScalarWhereInput
    data: XOR<mentorUpdateManyMutationInput, mentorUncheckedUpdateManyWithoutFieldt_courseInput>
  }

  export type mentorScalarWhereInput = {
    AND?: mentorScalarWhereInput | mentorScalarWhereInput[]
    OR?: mentorScalarWhereInput[]
    NOT?: mentorScalarWhereInput | mentorScalarWhereInput[]
    Mentor_id?: IntFilter<"mentor"> | number
    Course_id?: StringNullableFilter<"mentor"> | string | null
  }

  export type mentorCreateWithoutInternal_mentorInput = {
    external_mentor?: external_mentorCreateNestedOneWithoutMentorInput
    person: personCreateNestedOneWithoutMentorInput
    fieldt_course?: fieldt_courseCreateNestedOneWithoutMentorInput
  }

  export type mentorUncheckedCreateWithoutInternal_mentorInput = {
    Mentor_id: number
    Course_id?: string | null
    external_mentor?: external_mentorUncheckedCreateNestedOneWithoutMentorInput
  }

  export type mentorCreateOrConnectWithoutInternal_mentorInput = {
    where: mentorWhereUniqueInput
    create: XOR<mentorCreateWithoutInternal_mentorInput, mentorUncheckedCreateWithoutInternal_mentorInput>
  }

  export type studentCreateWithoutInternal_mentorInput = {
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    person: personCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutInternal_mentorInput = {
    Student_id: number
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollUncheckedCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutInternal_mentorInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutInternal_mentorInput, studentUncheckedCreateWithoutInternal_mentorInput>
  }

  export type mentorUpsertWithoutInternal_mentorInput = {
    update: XOR<mentorUpdateWithoutInternal_mentorInput, mentorUncheckedUpdateWithoutInternal_mentorInput>
    create: XOR<mentorCreateWithoutInternal_mentorInput, mentorUncheckedCreateWithoutInternal_mentorInput>
    where?: mentorWhereInput
  }

  export type mentorUpdateToOneWithWhereWithoutInternal_mentorInput = {
    where?: mentorWhereInput
    data: XOR<mentorUpdateWithoutInternal_mentorInput, mentorUncheckedUpdateWithoutInternal_mentorInput>
  }

  export type mentorUpdateWithoutInternal_mentorInput = {
    external_mentor?: external_mentorUpdateOneWithoutMentorNestedInput
    person?: personUpdateOneRequiredWithoutMentorNestedInput
    fieldt_course?: fieldt_courseUpdateOneWithoutMentorNestedInput
  }

  export type mentorUncheckedUpdateWithoutInternal_mentorInput = {
    Mentor_id?: IntFieldUpdateOperationsInput | number
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    external_mentor?: external_mentorUncheckedUpdateOneWithoutMentorNestedInput
  }

  export type studentUpsertWithoutInternal_mentorInput = {
    update: XOR<studentUpdateWithoutInternal_mentorInput, studentUncheckedUpdateWithoutInternal_mentorInput>
    create: XOR<studentCreateWithoutInternal_mentorInput, studentUncheckedCreateWithoutInternal_mentorInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutInternal_mentorInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutInternal_mentorInput, studentUncheckedUpdateWithoutInternal_mentorInput>
  }

  export type studentUpdateWithoutInternal_mentorInput = {
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    person?: personUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutInternal_mentorInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUncheckedUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type external_mentorCreateWithoutMentorInput = {
    organization?: organizationCreateNestedOneWithoutExternal_mentorInput
  }

  export type external_mentorUncheckedCreateWithoutMentorInput = {
    Org_id?: number | null
  }

  export type external_mentorCreateOrConnectWithoutMentorInput = {
    where: external_mentorWhereUniqueInput
    create: XOR<external_mentorCreateWithoutMentorInput, external_mentorUncheckedCreateWithoutMentorInput>
  }

  export type internal_mentorCreateWithoutMentorInput = {
    student?: studentCreateNestedOneWithoutInternal_mentorInput
  }

  export type internal_mentorUncheckedCreateWithoutMentorInput = {
    Student_id?: number | null
  }

  export type internal_mentorCreateOrConnectWithoutMentorInput = {
    where: internal_mentorWhereUniqueInput
    create: XOR<internal_mentorCreateWithoutMentorInput, internal_mentorUncheckedCreateWithoutMentorInput>
  }

  export type personCreateWithoutMentorInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    employee?: employeeCreateNestedOneWithoutPersonInput
    student?: studentCreateNestedOneWithoutPersonInput
  }

  export type personUncheckedCreateWithoutMentorInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    employee?: employeeUncheckedCreateNestedOneWithoutPersonInput
    student?: studentUncheckedCreateNestedOneWithoutPersonInput
  }

  export type personCreateOrConnectWithoutMentorInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutMentorInput, personUncheckedCreateWithoutMentorInput>
  }

  export type fieldt_courseCreateWithoutMentorInput = {
    Course_id: string
    Name: string
    Duration: string
    enroll?: enrollCreateNestedManyWithoutFieldt_courseInput
    enrollment?: enrollmentCreateNestedManyWithoutFieldt_courseInput
    organization?: organizationCreateNestedOneWithoutFieldt_courseInput
  }

  export type fieldt_courseUncheckedCreateWithoutMentorInput = {
    Course_id: string
    Name: string
    Duration: string
    Org_id?: number | null
    enroll?: enrollUncheckedCreateNestedManyWithoutFieldt_courseInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseCreateOrConnectWithoutMentorInput = {
    where: fieldt_courseWhereUniqueInput
    create: XOR<fieldt_courseCreateWithoutMentorInput, fieldt_courseUncheckedCreateWithoutMentorInput>
  }

  export type external_mentorUpsertWithoutMentorInput = {
    update: XOR<external_mentorUpdateWithoutMentorInput, external_mentorUncheckedUpdateWithoutMentorInput>
    create: XOR<external_mentorCreateWithoutMentorInput, external_mentorUncheckedCreateWithoutMentorInput>
    where?: external_mentorWhereInput
  }

  export type external_mentorUpdateToOneWithWhereWithoutMentorInput = {
    where?: external_mentorWhereInput
    data: XOR<external_mentorUpdateWithoutMentorInput, external_mentorUncheckedUpdateWithoutMentorInput>
  }

  export type external_mentorUpdateWithoutMentorInput = {
    organization?: organizationUpdateOneWithoutExternal_mentorNestedInput
  }

  export type external_mentorUncheckedUpdateWithoutMentorInput = {
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type internal_mentorUpsertWithoutMentorInput = {
    update: XOR<internal_mentorUpdateWithoutMentorInput, internal_mentorUncheckedUpdateWithoutMentorInput>
    create: XOR<internal_mentorCreateWithoutMentorInput, internal_mentorUncheckedCreateWithoutMentorInput>
    where?: internal_mentorWhereInput
  }

  export type internal_mentorUpdateToOneWithWhereWithoutMentorInput = {
    where?: internal_mentorWhereInput
    data: XOR<internal_mentorUpdateWithoutMentorInput, internal_mentorUncheckedUpdateWithoutMentorInput>
  }

  export type internal_mentorUpdateWithoutMentorInput = {
    student?: studentUpdateOneWithoutInternal_mentorNestedInput
  }

  export type internal_mentorUncheckedUpdateWithoutMentorInput = {
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type personUpsertWithoutMentorInput = {
    update: XOR<personUpdateWithoutMentorInput, personUncheckedUpdateWithoutMentorInput>
    create: XOR<personCreateWithoutMentorInput, personUncheckedCreateWithoutMentorInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutMentorInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutMentorInput, personUncheckedUpdateWithoutMentorInput>
  }

  export type personUpdateWithoutMentorInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeeUpdateOneWithoutPersonNestedInput
    student?: studentUpdateOneWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutMentorInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeeUncheckedUpdateOneWithoutPersonNestedInput
    student?: studentUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type fieldt_courseUpsertWithoutMentorInput = {
    update: XOR<fieldt_courseUpdateWithoutMentorInput, fieldt_courseUncheckedUpdateWithoutMentorInput>
    create: XOR<fieldt_courseCreateWithoutMentorInput, fieldt_courseUncheckedCreateWithoutMentorInput>
    where?: fieldt_courseWhereInput
  }

  export type fieldt_courseUpdateToOneWithWhereWithoutMentorInput = {
    where?: fieldt_courseWhereInput
    data: XOR<fieldt_courseUpdateWithoutMentorInput, fieldt_courseUncheckedUpdateWithoutMentorInput>
  }

  export type fieldt_courseUpdateWithoutMentorInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    enroll?: enrollUpdateManyWithoutFieldt_courseNestedInput
    enrollment?: enrollmentUpdateManyWithoutFieldt_courseNestedInput
    organization?: organizationUpdateOneWithoutFieldt_courseNestedInput
  }

  export type fieldt_courseUncheckedUpdateWithoutMentorInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    Org_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUncheckedUpdateManyWithoutFieldt_courseNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutFieldt_courseNestedInput
  }

  export type external_mentorCreateWithoutOrganizationInput = {
    mentor: mentorCreateNestedOneWithoutExternal_mentorInput
  }

  export type external_mentorUncheckedCreateWithoutOrganizationInput = {
    Ext_Mentor_id: number
  }

  export type external_mentorCreateOrConnectWithoutOrganizationInput = {
    where: external_mentorWhereUniqueInput
    create: XOR<external_mentorCreateWithoutOrganizationInput, external_mentorUncheckedCreateWithoutOrganizationInput>
  }

  export type external_mentorCreateManyOrganizationInputEnvelope = {
    data: external_mentorCreateManyOrganizationInput | external_mentorCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type fieldt_courseCreateWithoutOrganizationInput = {
    Course_id: string
    Name: string
    Duration: string
    enroll?: enrollCreateNestedManyWithoutFieldt_courseInput
    enrollment?: enrollmentCreateNestedManyWithoutFieldt_courseInput
    mentor?: mentorCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseUncheckedCreateWithoutOrganizationInput = {
    Course_id: string
    Name: string
    Duration: string
    enroll?: enrollUncheckedCreateNestedManyWithoutFieldt_courseInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutFieldt_courseInput
    mentor?: mentorUncheckedCreateNestedManyWithoutFieldt_courseInput
  }

  export type fieldt_courseCreateOrConnectWithoutOrganizationInput = {
    where: fieldt_courseWhereUniqueInput
    create: XOR<fieldt_courseCreateWithoutOrganizationInput, fieldt_courseUncheckedCreateWithoutOrganizationInput>
  }

  export type fieldt_courseCreateManyOrganizationInputEnvelope = {
    data: fieldt_courseCreateManyOrganizationInput | fieldt_courseCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type coordinatorCreateWithoutOrganizationInput = {
    Coordinator_id: number
    Name?: string | null
    enrollment?: enrollmentCreateNestedManyWithoutCoordinatorInput
  }

  export type coordinatorUncheckedCreateWithoutOrganizationInput = {
    Coordinator_id: number
    Name?: string | null
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutCoordinatorInput
  }

  export type coordinatorCreateOrConnectWithoutOrganizationInput = {
    where: coordinatorWhereUniqueInput
    create: XOR<coordinatorCreateWithoutOrganizationInput, coordinatorUncheckedCreateWithoutOrganizationInput>
  }

  export type external_mentorUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: external_mentorWhereUniqueInput
    update: XOR<external_mentorUpdateWithoutOrganizationInput, external_mentorUncheckedUpdateWithoutOrganizationInput>
    create: XOR<external_mentorCreateWithoutOrganizationInput, external_mentorUncheckedCreateWithoutOrganizationInput>
  }

  export type external_mentorUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: external_mentorWhereUniqueInput
    data: XOR<external_mentorUpdateWithoutOrganizationInput, external_mentorUncheckedUpdateWithoutOrganizationInput>
  }

  export type external_mentorUpdateManyWithWhereWithoutOrganizationInput = {
    where: external_mentorScalarWhereInput
    data: XOR<external_mentorUpdateManyMutationInput, external_mentorUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type external_mentorScalarWhereInput = {
    AND?: external_mentorScalarWhereInput | external_mentorScalarWhereInput[]
    OR?: external_mentorScalarWhereInput[]
    NOT?: external_mentorScalarWhereInput | external_mentorScalarWhereInput[]
    Ext_Mentor_id?: IntFilter<"external_mentor"> | number
    Org_id?: IntNullableFilter<"external_mentor"> | number | null
  }

  export type fieldt_courseUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: fieldt_courseWhereUniqueInput
    update: XOR<fieldt_courseUpdateWithoutOrganizationInput, fieldt_courseUncheckedUpdateWithoutOrganizationInput>
    create: XOR<fieldt_courseCreateWithoutOrganizationInput, fieldt_courseUncheckedCreateWithoutOrganizationInput>
  }

  export type fieldt_courseUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: fieldt_courseWhereUniqueInput
    data: XOR<fieldt_courseUpdateWithoutOrganizationInput, fieldt_courseUncheckedUpdateWithoutOrganizationInput>
  }

  export type fieldt_courseUpdateManyWithWhereWithoutOrganizationInput = {
    where: fieldt_courseScalarWhereInput
    data: XOR<fieldt_courseUpdateManyMutationInput, fieldt_courseUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type fieldt_courseScalarWhereInput = {
    AND?: fieldt_courseScalarWhereInput | fieldt_courseScalarWhereInput[]
    OR?: fieldt_courseScalarWhereInput[]
    NOT?: fieldt_courseScalarWhereInput | fieldt_courseScalarWhereInput[]
    Course_id?: StringFilter<"fieldt_course"> | string
    Name?: StringFilter<"fieldt_course"> | string
    Duration?: StringFilter<"fieldt_course"> | string
    Org_id?: IntNullableFilter<"fieldt_course"> | number | null
  }

  export type coordinatorUpsertWithoutOrganizationInput = {
    update: XOR<coordinatorUpdateWithoutOrganizationInput, coordinatorUncheckedUpdateWithoutOrganizationInput>
    create: XOR<coordinatorCreateWithoutOrganizationInput, coordinatorUncheckedCreateWithoutOrganizationInput>
    where?: coordinatorWhereInput
  }

  export type coordinatorUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: coordinatorWhereInput
    data: XOR<coordinatorUpdateWithoutOrganizationInput, coordinatorUncheckedUpdateWithoutOrganizationInput>
  }

  export type coordinatorUpdateWithoutOrganizationInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    enrollment?: enrollmentUpdateManyWithoutCoordinatorNestedInput
  }

  export type coordinatorUncheckedUpdateWithoutOrganizationInput = {
    Coordinator_id?: IntFieldUpdateOperationsInput | number
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    enrollment?: enrollmentUncheckedUpdateManyWithoutCoordinatorNestedInput
  }

  export type employeeCreateWithoutPersonInput = {
    Salary?: number | null
    Position: string
  }

  export type employeeUncheckedCreateWithoutPersonInput = {
    Salary?: number | null
    Position: string
  }

  export type employeeCreateOrConnectWithoutPersonInput = {
    where: employeeWhereUniqueInput
    create: XOR<employeeCreateWithoutPersonInput, employeeUncheckedCreateWithoutPersonInput>
  }

  export type mentorCreateWithoutPersonInput = {
    external_mentor?: external_mentorCreateNestedOneWithoutMentorInput
    internal_mentor?: internal_mentorCreateNestedOneWithoutMentorInput
    fieldt_course?: fieldt_courseCreateNestedOneWithoutMentorInput
  }

  export type mentorUncheckedCreateWithoutPersonInput = {
    Course_id?: string | null
    external_mentor?: external_mentorUncheckedCreateNestedOneWithoutMentorInput
    internal_mentor?: internal_mentorUncheckedCreateNestedOneWithoutMentorInput
  }

  export type mentorCreateOrConnectWithoutPersonInput = {
    where: mentorWhereUniqueInput
    create: XOR<mentorCreateWithoutPersonInput, mentorUncheckedCreateWithoutPersonInput>
  }

  export type studentCreateWithoutPersonInput = {
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutPersonInput = {
    Level?: string | null
    Major_Dept: string
    Evaluation_id?: number | null
    enroll?: enrollUncheckedCreateNestedManyWithoutStudentInput
    enrollment?: enrollmentUncheckedCreateNestedManyWithoutStudentInput
    internal_mentor?: internal_mentorUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutPersonInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutPersonInput, studentUncheckedCreateWithoutPersonInput>
  }

  export type employeeUpsertWithoutPersonInput = {
    update: XOR<employeeUpdateWithoutPersonInput, employeeUncheckedUpdateWithoutPersonInput>
    create: XOR<employeeCreateWithoutPersonInput, employeeUncheckedCreateWithoutPersonInput>
    where?: employeeWhereInput
  }

  export type employeeUpdateToOneWithWhereWithoutPersonInput = {
    where?: employeeWhereInput
    data: XOR<employeeUpdateWithoutPersonInput, employeeUncheckedUpdateWithoutPersonInput>
  }

  export type employeeUpdateWithoutPersonInput = {
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
    Position?: StringFieldUpdateOperationsInput | string
  }

  export type employeeUncheckedUpdateWithoutPersonInput = {
    Salary?: NullableIntFieldUpdateOperationsInput | number | null
    Position?: StringFieldUpdateOperationsInput | string
  }

  export type mentorUpsertWithoutPersonInput = {
    update: XOR<mentorUpdateWithoutPersonInput, mentorUncheckedUpdateWithoutPersonInput>
    create: XOR<mentorCreateWithoutPersonInput, mentorUncheckedCreateWithoutPersonInput>
    where?: mentorWhereInput
  }

  export type mentorUpdateToOneWithWhereWithoutPersonInput = {
    where?: mentorWhereInput
    data: XOR<mentorUpdateWithoutPersonInput, mentorUncheckedUpdateWithoutPersonInput>
  }

  export type mentorUpdateWithoutPersonInput = {
    external_mentor?: external_mentorUpdateOneWithoutMentorNestedInput
    internal_mentor?: internal_mentorUpdateOneWithoutMentorNestedInput
    fieldt_course?: fieldt_courseUpdateOneWithoutMentorNestedInput
  }

  export type mentorUncheckedUpdateWithoutPersonInput = {
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    external_mentor?: external_mentorUncheckedUpdateOneWithoutMentorNestedInput
    internal_mentor?: internal_mentorUncheckedUpdateOneWithoutMentorNestedInput
  }

  export type studentUpsertWithoutPersonInput = {
    update: XOR<studentUpdateWithoutPersonInput, studentUncheckedUpdateWithoutPersonInput>
    create: XOR<studentCreateWithoutPersonInput, studentUncheckedCreateWithoutPersonInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutPersonInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutPersonInput, studentUncheckedUpdateWithoutPersonInput>
  }

  export type studentUpdateWithoutPersonInput = {
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutPersonInput = {
    Level?: NullableStringFieldUpdateOperationsInput | string | null
    Major_Dept?: StringFieldUpdateOperationsInput | string
    Evaluation_id?: NullableIntFieldUpdateOperationsInput | number | null
    enroll?: enrollUncheckedUpdateManyWithoutStudentNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutStudentNestedInput
    internal_mentor?: internal_mentorUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type enrollCreateWithoutStudentInput = {
    fieldt_course: fieldt_courseCreateNestedOneWithoutEnrollInput
  }

  export type enrollUncheckedCreateWithoutStudentInput = {
    Course_id: string
  }

  export type enrollCreateOrConnectWithoutStudentInput = {
    where: enrollWhereUniqueInput
    create: XOR<enrollCreateWithoutStudentInput, enrollUncheckedCreateWithoutStudentInput>
  }

  export type enrollCreateManyStudentInputEnvelope = {
    data: enrollCreateManyStudentInput | enrollCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentCreateWithoutStudentInput = {
    Enrollment_id: number
    Semester?: string | null
    Final_grade?: string | null
    fieldt_course?: fieldt_courseCreateNestedOneWithoutEnrollmentInput
    coordinator?: coordinatorCreateNestedOneWithoutEnrollmentInput
  }

  export type enrollmentUncheckedCreateWithoutStudentInput = {
    Enrollment_id: number
    Course_id?: string | null
    Semester?: string | null
    Final_grade?: string | null
    Coordinator_id?: number | null
  }

  export type enrollmentCreateOrConnectWithoutStudentInput = {
    where: enrollmentWhereUniqueInput
    create: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
  }

  export type enrollmentCreateManyStudentInputEnvelope = {
    data: enrollmentCreateManyStudentInput | enrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type internal_mentorCreateWithoutStudentInput = {
    mentor: mentorCreateNestedOneWithoutInternal_mentorInput
  }

  export type internal_mentorUncheckedCreateWithoutStudentInput = {
    Int_Mentor_id: number
  }

  export type internal_mentorCreateOrConnectWithoutStudentInput = {
    where: internal_mentorWhereUniqueInput
    create: XOR<internal_mentorCreateWithoutStudentInput, internal_mentorUncheckedCreateWithoutStudentInput>
  }

  export type internal_mentorCreateManyStudentInputEnvelope = {
    data: internal_mentorCreateManyStudentInput | internal_mentorCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type personCreateWithoutStudentInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    employee?: employeeCreateNestedOneWithoutPersonInput
    mentor?: mentorCreateNestedOneWithoutPersonInput
  }

  export type personUncheckedCreateWithoutStudentInput = {
    Person_id: number
    Name: string
    Email?: string | null
    Sex?: string | null
    employee?: employeeUncheckedCreateNestedOneWithoutPersonInput
    mentor?: mentorUncheckedCreateNestedOneWithoutPersonInput
  }

  export type personCreateOrConnectWithoutStudentInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutStudentInput, personUncheckedCreateWithoutStudentInput>
  }

  export type enrollUpsertWithWhereUniqueWithoutStudentInput = {
    where: enrollWhereUniqueInput
    update: XOR<enrollUpdateWithoutStudentInput, enrollUncheckedUpdateWithoutStudentInput>
    create: XOR<enrollCreateWithoutStudentInput, enrollUncheckedCreateWithoutStudentInput>
  }

  export type enrollUpdateWithWhereUniqueWithoutStudentInput = {
    where: enrollWhereUniqueInput
    data: XOR<enrollUpdateWithoutStudentInput, enrollUncheckedUpdateWithoutStudentInput>
  }

  export type enrollUpdateManyWithWhereWithoutStudentInput = {
    where: enrollScalarWhereInput
    data: XOR<enrollUpdateManyMutationInput, enrollUncheckedUpdateManyWithoutStudentInput>
  }

  export type enrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: enrollmentWhereUniqueInput
    update: XOR<enrollmentUpdateWithoutStudentInput, enrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<enrollmentCreateWithoutStudentInput, enrollmentUncheckedCreateWithoutStudentInput>
  }

  export type enrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: enrollmentWhereUniqueInput
    data: XOR<enrollmentUpdateWithoutStudentInput, enrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type enrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: enrollmentScalarWhereInput
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type internal_mentorUpsertWithWhereUniqueWithoutStudentInput = {
    where: internal_mentorWhereUniqueInput
    update: XOR<internal_mentorUpdateWithoutStudentInput, internal_mentorUncheckedUpdateWithoutStudentInput>
    create: XOR<internal_mentorCreateWithoutStudentInput, internal_mentorUncheckedCreateWithoutStudentInput>
  }

  export type internal_mentorUpdateWithWhereUniqueWithoutStudentInput = {
    where: internal_mentorWhereUniqueInput
    data: XOR<internal_mentorUpdateWithoutStudentInput, internal_mentorUncheckedUpdateWithoutStudentInput>
  }

  export type internal_mentorUpdateManyWithWhereWithoutStudentInput = {
    where: internal_mentorScalarWhereInput
    data: XOR<internal_mentorUpdateManyMutationInput, internal_mentorUncheckedUpdateManyWithoutStudentInput>
  }

  export type internal_mentorScalarWhereInput = {
    AND?: internal_mentorScalarWhereInput | internal_mentorScalarWhereInput[]
    OR?: internal_mentorScalarWhereInput[]
    NOT?: internal_mentorScalarWhereInput | internal_mentorScalarWhereInput[]
    Int_Mentor_id?: IntFilter<"internal_mentor"> | number
    Student_id?: IntNullableFilter<"internal_mentor"> | number | null
  }

  export type personUpsertWithoutStudentInput = {
    update: XOR<personUpdateWithoutStudentInput, personUncheckedUpdateWithoutStudentInput>
    create: XOR<personCreateWithoutStudentInput, personUncheckedCreateWithoutStudentInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutStudentInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutStudentInput, personUncheckedUpdateWithoutStudentInput>
  }

  export type personUpdateWithoutStudentInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeeUpdateOneWithoutPersonNestedInput
    mentor?: mentorUpdateOneWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutStudentInput = {
    Person_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Sex?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: employeeUncheckedUpdateOneWithoutPersonNestedInput
    mentor?: mentorUncheckedUpdateOneWithoutPersonNestedInput
  }

  export type enrollmentCreateManyCoordinatorInput = {
    Enrollment_id: number
    Student_id?: number | null
    Course_id?: string | null
    Semester?: string | null
    Final_grade?: string | null
  }

  export type organizationCreateManyCoordinatorInput = {
    Org_id: number
    Name: string
    Contact_info: string
    Approval_Status?: string | null
  }

  export type enrollmentUpdateWithoutCoordinatorInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    student?: studentUpdateOneWithoutEnrollmentNestedInput
    fieldt_course?: fieldt_courseUpdateOneWithoutEnrollmentNestedInput
  }

  export type enrollmentUncheckedUpdateWithoutCoordinatorInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type enrollmentUncheckedUpdateManyWithoutCoordinatorInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type organizationUpdateWithoutCoordinatorInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    external_mentor?: external_mentorUpdateManyWithoutOrganizationNestedInput
    fieldt_course?: fieldt_courseUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateWithoutCoordinatorInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
    external_mentor?: external_mentorUncheckedUpdateManyWithoutOrganizationNestedInput
    fieldt_course?: fieldt_courseUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type organizationUncheckedUpdateManyWithoutCoordinatorInput = {
    Org_id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Contact_info?: StringFieldUpdateOperationsInput | string
    Approval_Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type enrollCreateManyFieldt_courseInput = {
    Student_id: number
  }

  export type enrollmentCreateManyFieldt_courseInput = {
    Enrollment_id: number
    Student_id?: number | null
    Semester?: string | null
    Final_grade?: string | null
    Coordinator_id?: number | null
  }

  export type mentorCreateManyFieldt_courseInput = {
    Mentor_id: number
  }

  export type enrollUpdateWithoutFieldt_courseInput = {
    student?: studentUpdateOneRequiredWithoutEnrollNestedInput
  }

  export type enrollUncheckedUpdateWithoutFieldt_courseInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
  }

  export type enrollUncheckedUpdateManyWithoutFieldt_courseInput = {
    Student_id?: IntFieldUpdateOperationsInput | number
  }

  export type enrollmentUpdateWithoutFieldt_courseInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    student?: studentUpdateOneWithoutEnrollmentNestedInput
    coordinator?: coordinatorUpdateOneWithoutEnrollmentNestedInput
  }

  export type enrollmentUncheckedUpdateWithoutFieldt_courseInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enrollmentUncheckedUpdateManyWithoutFieldt_courseInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Student_id?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type mentorUpdateWithoutFieldt_courseInput = {
    external_mentor?: external_mentorUpdateOneWithoutMentorNestedInput
    internal_mentor?: internal_mentorUpdateOneWithoutMentorNestedInput
    person?: personUpdateOneRequiredWithoutMentorNestedInput
  }

  export type mentorUncheckedUpdateWithoutFieldt_courseInput = {
    Mentor_id?: IntFieldUpdateOperationsInput | number
    external_mentor?: external_mentorUncheckedUpdateOneWithoutMentorNestedInput
    internal_mentor?: internal_mentorUncheckedUpdateOneWithoutMentorNestedInput
  }

  export type mentorUncheckedUpdateManyWithoutFieldt_courseInput = {
    Mentor_id?: IntFieldUpdateOperationsInput | number
  }

  export type external_mentorCreateManyOrganizationInput = {
    Ext_Mentor_id: number
  }

  export type fieldt_courseCreateManyOrganizationInput = {
    Course_id: string
    Name: string
    Duration: string
  }

  export type external_mentorUpdateWithoutOrganizationInput = {
    mentor?: mentorUpdateOneRequiredWithoutExternal_mentorNestedInput
  }

  export type external_mentorUncheckedUpdateWithoutOrganizationInput = {
    Ext_Mentor_id?: IntFieldUpdateOperationsInput | number
  }

  export type external_mentorUncheckedUpdateManyWithoutOrganizationInput = {
    Ext_Mentor_id?: IntFieldUpdateOperationsInput | number
  }

  export type fieldt_courseUpdateWithoutOrganizationInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    enroll?: enrollUpdateManyWithoutFieldt_courseNestedInput
    enrollment?: enrollmentUpdateManyWithoutFieldt_courseNestedInput
    mentor?: mentorUpdateManyWithoutFieldt_courseNestedInput
  }

  export type fieldt_courseUncheckedUpdateWithoutOrganizationInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
    enroll?: enrollUncheckedUpdateManyWithoutFieldt_courseNestedInput
    enrollment?: enrollmentUncheckedUpdateManyWithoutFieldt_courseNestedInput
    mentor?: mentorUncheckedUpdateManyWithoutFieldt_courseNestedInput
  }

  export type fieldt_courseUncheckedUpdateManyWithoutOrganizationInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
    Name?: StringFieldUpdateOperationsInput | string
    Duration?: StringFieldUpdateOperationsInput | string
  }

  export type enrollCreateManyStudentInput = {
    Course_id: string
  }

  export type enrollmentCreateManyStudentInput = {
    Enrollment_id: number
    Course_id?: string | null
    Semester?: string | null
    Final_grade?: string | null
    Coordinator_id?: number | null
  }

  export type internal_mentorCreateManyStudentInput = {
    Int_Mentor_id: number
  }

  export type enrollUpdateWithoutStudentInput = {
    fieldt_course?: fieldt_courseUpdateOneRequiredWithoutEnrollNestedInput
  }

  export type enrollUncheckedUpdateWithoutStudentInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollUncheckedUpdateManyWithoutStudentInput = {
    Course_id?: StringFieldUpdateOperationsInput | string
  }

  export type enrollmentUpdateWithoutStudentInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    fieldt_course?: fieldt_courseUpdateOneWithoutEnrollmentNestedInput
    coordinator?: coordinatorUpdateOneWithoutEnrollmentNestedInput
  }

  export type enrollmentUncheckedUpdateWithoutStudentInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enrollmentUncheckedUpdateManyWithoutStudentInput = {
    Enrollment_id?: IntFieldUpdateOperationsInput | number
    Course_id?: NullableStringFieldUpdateOperationsInput | string | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Final_grade?: NullableStringFieldUpdateOperationsInput | string | null
    Coordinator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type internal_mentorUpdateWithoutStudentInput = {
    mentor?: mentorUpdateOneRequiredWithoutInternal_mentorNestedInput
  }

  export type internal_mentorUncheckedUpdateWithoutStudentInput = {
    Int_Mentor_id?: IntFieldUpdateOperationsInput | number
  }

  export type internal_mentorUncheckedUpdateManyWithoutStudentInput = {
    Int_Mentor_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}