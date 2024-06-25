import chalk from 'chalk';
import passwordGenerator from 'password-generator';

export const generatePassword = (type) => {
  const passwordConfigs = {
    strong: {
      length: 16,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: true
    },
    medium: {
      length: 12,
      numbers: true,
      symbols: false,
      uppercase: true,
      excludeSimilarCharacters: true
    },
    weak: {
      length: 8,
      numbers: true,
      symbols: false,
      uppercase: false,
      excludeSimilarCharacters: false
    }
  };

  return passwordGenerator(passwordConfigs[type].length, passwordConfigs[type]);
}