
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.8.2
 * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
 */
Prisma.prismaVersion = {
  client: "6.8.2",
  engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  timezone: 'timezone',
  preferences: 'preferences',
  aiCoachEnabled: 'aiCoachEnabled',
  biometricSyncEnabled: 'biometricSyncEnabled',
  baseStressLevel: 'baseStressLevel',
  sleepGoal: 'sleepGoal',
  stepsGoal: 'stepsGoal',
  workSchedule: 'workSchedule',
  personalityProfile: 'personalityProfile'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  expiresAt: 'expiresAt',
  ipAddress: 'ipAddress',
  userAgent: 'userAgent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  accountId: 'accountId',
  providerId: 'providerId',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  accessTokenExpiresAt: 'accessTokenExpiresAt',
  refreshTokenExpiresAt: 'refreshTokenExpiresAt',
  scope: 'scope',
  idToken: 'idToken',
  password: 'password',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  value: 'value',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JournalEntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  content: 'content',
  date: 'date',
  mood: 'mood',
  stressLevel: 'stressLevel',
  emotionScores: 'emotionScores',
  topics: 'topics',
  sentiment: 'sentiment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HabitScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  isCompleted: 'isCompleted',
  date: 'date',
  aiSuggested: 'aiSuggested',
  adaptiveReminder: 'adaptiveReminder',
  difficultyLevel: 'difficultyLevel',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ClassScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  startTime: 'startTime',
  durationMins: 'durationMins',
  instructor: 'instructor',
  imageUrl: 'imageUrl',
  capacity: 'capacity',
  intensity: 'intensity',
  stressLevel: 'stressLevel',
  aiOptimized: 'aiOptimized',
  adaptiveContent: 'adaptiveContent',
  prerequisites: 'prerequisites',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  classId: 'classId',
  aiSuggested: 'aiSuggested',
  predictedEffectiveness: 'predictedEffectiveness',
  createdAt: 'createdAt'
};

exports.Prisma.BiometricDataScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  heartRate: 'heartRate',
  heartRateVariability: 'heartRateVariability',
  stressLevel: 'stressLevel',
  sleepQuality: 'sleepQuality',
  sleepDuration: 'sleepDuration',
  steps: 'steps',
  calories: 'calories',
  respiratoryRate: 'respiratoryRate',
  skinTemperature: 'skinTemperature',
  bloodPressureSystolic: 'bloodPressureSystolic',
  bloodPressureDiastolic: 'bloodPressureDiastolic',
  oxygenSaturation: 'oxygenSaturation',
  wellnessScore: 'wellnessScore',
  energyLevel: 'energyLevel',
  recoveryScore: 'recoveryScore',
  deviceType: 'deviceType',
  deviceId: 'deviceId',
  accuracy: 'accuracy',
  timestamp: 'timestamp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MoodEntryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  mood: 'mood',
  confidence: 'confidence',
  source: 'source',
  emotions: 'emotions',
  valence: 'valence',
  arousal: 'arousal',
  location: 'location',
  weather: 'weather',
  timeOfDay: 'timeOfDay',
  activity: 'activity',
  voiceFeatures: 'voiceFeatures',
  timestamp: 'timestamp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StressPredictionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  predictedStressLevel: 'predictedStressLevel',
  confidence: 'confidence',
  predictedAt: 'predictedAt',
  modelVersion: 'modelVersion',
  triggers: 'triggers',
  riskFactors: 'riskFactors',
  recommendedInterventions: 'recommendedInterventions',
  preventionStrategies: 'preventionStrategies',
  actualStressLevel: 'actualStressLevel',
  wasAccurate: 'wasAccurate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WellnessChallengeScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  type: 'type',
  duration: 'duration',
  target: 'target',
  reward: 'reward',
  isActive: 'isActive',
  startDate: 'startDate',
  endDate: 'endDate',
  maxParticipants: 'maxParticipants',
  isPublic: 'isPublic',
  teamBased: 'teamBased',
  aiGenerated: 'aiGenerated',
  adaptiveDifficulty: 'adaptiveDifficulty',
  personalizedGoals: 'personalizedGoals',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChallengeParticipantScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  challengeId: 'challengeId',
  progress: 'progress',
  completed: 'completed',
  currentStreak: 'currentStreak',
  bestStreak: 'bestStreak',
  rank: 'rank',
  joinedAt: 'joinedAt',
  completedAt: 'completedAt'
};

exports.Prisma.AIRecommendationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  description: 'description',
  priority: 'priority',
  reasoning: 'reasoning',
  actionUrl: 'actionUrl',
  duration: 'duration',
  intensity: 'intensity',
  triggeredBy: 'triggeredBy',
  biometricState: 'biometricState',
  effectivenessScore: 'effectivenessScore',
  isRead: 'isRead',
  isCompleted: 'isCompleted',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  completedAt: 'completedAt'
};

exports.Prisma.DeviceConnectionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  deviceType: 'deviceType',
  deviceId: 'deviceId',
  deviceName: 'deviceName',
  isConnected: 'isConnected',
  lastSync: 'lastSync',
  syncInterval: 'syncInterval',
  reliability: 'reliability',
  batteryLevel: 'batteryLevel',
  signalStrength: 'signalStrength',
  permissions: 'permissions',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WellnessSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionType: 'sessionType',
  title: 'title',
  duration: 'duration',
  startingStress: 'startingStress',
  endingStress: 'endingStress',
  adaptations: 'adaptations',
  avgHeartRate: 'avgHeartRate',
  stressReduction: 'stressReduction',
  userRating: 'userRating',
  completionRate: 'completionRate',
  startedAt: 'startedAt',
  completedAt: 'completedAt'
};

exports.Prisma.EnvironmentalDataScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  location: 'location',
  timezone: 'timezone',
  temperature: 'temperature',
  humidity: 'humidity',
  pressure: 'pressure',
  weather: 'weather',
  airQuality: 'airQuality',
  pollutants: 'pollutants',
  lightLevel: 'lightLevel',
  uvIndex: 'uvIndex',
  noiseLevel: 'noiseLevel',
  timestamp: 'timestamp'
};

exports.Prisma.WellnessGroupScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  isPublic: 'isPublic',
  maxMembers: 'maxMembers',
  groupGoals: 'groupGoals',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.GroupMembershipScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  groupId: 'groupId',
  role: 'role',
  shareProgress: 'shareProgress',
  shareGoals: 'shareGoals',
  joinedAt: 'joinedAt'
};

exports.Prisma.WorkplaceIntegrationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  platform: 'platform',
  enabled: 'enabled',
  frequency: 'frequency',
  canSuggestBreaks: 'canSuggestBreaks',
  canAccessCalendar: 'canAccessCalendar',
  canSendReminders: 'canSendReminders',
  workHours: 'workHours',
  breakPreferences: 'breakPreferences',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Session: 'Session',
  Account: 'Account',
  Verification: 'Verification',
  JournalEntry: 'JournalEntry',
  Habit: 'Habit',
  Class: 'Class',
  Booking: 'Booking',
  BiometricData: 'BiometricData',
  MoodEntry: 'MoodEntry',
  StressPrediction: 'StressPrediction',
  WellnessChallenge: 'WellnessChallenge',
  ChallengeParticipant: 'ChallengeParticipant',
  AIRecommendation: 'AIRecommendation',
  DeviceConnection: 'DeviceConnection',
  WellnessSession: 'WellnessSession',
  EnvironmentalData: 'EnvironmentalData',
  WellnessGroup: 'WellnessGroup',
  GroupMembership: 'GroupMembership',
  WorkplaceIntegration: 'WorkplaceIntegration'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
