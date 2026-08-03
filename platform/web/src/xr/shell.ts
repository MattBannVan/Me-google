/**
 * Minimal WebXR session bootstrap.
 * Full spatial UI (TASK-017) will expand this with Three.js scene, controllers, and anchors.
 */

export interface XrShellOptions {
  onStatus?: (msg: string) => void;
}

export async function initXrShell(options: XrShellOptions = {}): Promise<void> {
  const { onStatus = () => {} } = options;

  // @ts-expect-error WebXR types may be incomplete in some TS configs
  const xr = navigator.xr as XRSystem | undefined;
  if (!xr) {
    throw new Error('navigator.xr is undefined');
  }

  const supported = await xr.isSessionSupported('immersive-vr');
  if (!supported) {
    onStatus('immersive-vr not supported. You can still use the 2D fallback shell.');
    // 2D fallback placeholder
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = '<p style="padding:2rem">Me-google WebXR scaffold ready. Enter VR on a compatible device.</p>';
    }
    return;
  }

  onStatus('immersive-vr supported. Request session when user gestures (button TBD in TASK-017).');
  // Full session request + Three.js scene deferred to TASK-017 to keep scaffold minimal.
}
