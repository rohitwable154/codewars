import ABA from './index';

test('ABA', () => {
  expect(ABA('A')).toBe('A');
  expect(ABA('B')).toBe('ABA');
  expect(ABA('C')).toBe('ABACABA');
  expect(ABA('D')).toBe('ABACABADABACABA');
  expect(ABA('E')).toBe('ABACABADABACABAEABACABADABACABA');
  expect(ABA('F')).toBe(
    'ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA',
  );
  expect(ABA('G')).toBe(
    'ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA',
  );
  expect(ABA('H')).toBe(
    'ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAHABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA',
  );
  expect(ABA('I')).toBe(
    'ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAHABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAIABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAHABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA',
  );
});
