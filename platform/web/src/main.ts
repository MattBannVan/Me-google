/**
 * Me-google Web / WebXR entry point.
 * Scaffold for TASK-016. Spatial shell (TASK-017) and core integration (TASK-018) follow.
 */

import { initXrShell } from './xr/shell';

const statusEl = document.getElementById('status');

function setStatus(msg: string) {
  if (statusEl) statusEl.textContent = msg;
}

async function boot() {
  setStatus('Checking WebXR support…');
  if (!('xr' in navigator)) {
    setStatus('WebXR not available in this browser. Use a WebXR-capable runtime (Quest Browser, Chrome with flags, etc.).');
    return;
  }
  try {
    await initXrShell({
      onStatus: setStatus,
    });
  } catch (err) {
    console.error(err);
    setStatus(`Failed to start XR shell: ${err instanceof Error ? err.message : String(err)}`);
  }
}

boot();
