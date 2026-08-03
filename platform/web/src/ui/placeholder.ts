/** Placeholder UI module for spatial overlays (TASK-017). */
export function createStatusOverlay(text: string): HTMLElement {
  const el = document.createElement('div');
  el.textContent = text;
  el.style.cssText = 'padding:0.5rem 1rem;background:rgba(0,0,0,0.6);border-radius:8px;';
  return el;
}
