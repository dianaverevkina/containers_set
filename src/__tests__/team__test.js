import Team from '../js/team';
import Character from '../js/character';

test('Adding characters to set - error(character has already added)', () => {
  const team = new Team();
  const hero = new Character('Ivan', 'Bowman');
  team.add(hero);
  expect(() => {
    team.add(hero);
  }).toThrow('Игрок уже добавлен');
});

test('Create array from set - works', () => {
  const team = new Team();
  team.add(new Character('Ivan', 'Bowman'));
  team.add(new Character('Igor', 'Undead'));
  const expected = [
    {
      name: 'Ivan',
      type: 'Bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'Igor',
      type: 'Undead',
      health: 100,
      level: 1,
    },
  ];
  expect(team.toArray()).toEqual(expected);
});

test('Adding some characters to set - works', () => {
  const team = new Team();
  const hero1 = new Character('Ivan', 'Bowman');
  const hero2 = new Character('Igor', 'Undead');

  team.addAll(hero1, hero2, hero1);

  const expected = [
    {
      name: 'Ivan',
      type: 'Bowman',
      health: 100,
      level: 1,
    },
    {
      name: 'Igor',
      type: 'Undead',
      health: 100,
      level: 1,
    },
  ];
  expect(team.toArray()).toEqual(expected);
});
