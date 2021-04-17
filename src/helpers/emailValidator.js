export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return '    Le champ ne peut-être vide.'
  if (!re.test(email)) return '    Ooops! Il faut une adresse mail valide.'
  return ''
}
