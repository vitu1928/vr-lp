export default function cx(...className) {
  return className.filter(Boolean).join(' ');
}
