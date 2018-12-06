export const preferencesFactory = (preferences = {}) => ({
  ...preferences,
  columns: 3,
  theme: 'default',
  time: { from: null, to: null },
  tweetsPerColumn: 30,
  handles: ['kardnumas', 'newsycombinator', 'ycombinator', 'MakeSchool'],
  themes: ['black', 'blue', 'red', 'green', 'purple', 'yellow'],
});
