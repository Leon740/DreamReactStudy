export const INPUTS = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'name'
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'email'
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'password'
  }
];

export function getFormInputsFn() {
  const formInputs = {};

  INPUTS.forEach(({ name }) => {
    formInputs[name] = '';
  });

  return formInputs;
}
