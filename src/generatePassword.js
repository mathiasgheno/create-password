
const numbers = '0123456789';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

const shuffle = (string) => {
  return string.split('').sort(() => Math.random() - 0.5).join('');
}

const passwordGenerator = (length, options) => {
  let password = '';
  let characters = letters;

  if (options.uppercase) {
    characters += letters.toUpperCase();
  }

  if (options.numbers) {
    characters += numbers;
  }

  if (options.symbols) {
    characters += specialCharacters;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return shuffle(password);
}

export const generatePassword = (type) => {
  const passwordConfigs = {
    strong: {
      length: 16,
      numbers: true,
      symbols: true,
      uppercase: true
    },
    medium: {
      length: 12,
      numbers: true,
      symbols: false,
      uppercase: true
    },
    weak: {
      length: 8,
      numbers: true,
      symbols: false,
      uppercase: false
    }
  };

  return passwordGenerator(passwordConfigs[type].length, passwordConfigs[type]);
}