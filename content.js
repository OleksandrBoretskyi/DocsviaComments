function getActiveEditable() {
  const el = document.activeElement;
  if (!el) return null;
  const isEditable = el.tagName === "TEXTAREA" || el.tagName === "INPUT" && el.type === "text" || el.isContentEditable;
  return isEditable ? el : null;
}

