import { Howl } from 'howler';

// Using very subtle, high-frequency white noise / synthetic "clicks" 
// We use base64 or placeholders for now, but these should be replaced with 
// actual premium .mp3/.wav files in a real production environment.
// For this demo, I'll use a very short, high-pitched sine wave / tick logic.

class SoundEngine {
    private static instance: SoundEngine;
    private clickSound: Howl | null = null;
    private hoverSound: Howl | null = null;
    private enabled: boolean = false;

    private constructor() {
        // Initialized only after first user interaction to satisfy browser policy
    }

    public static getInstance(): SoundEngine {
        if (!SoundEngine.instance) {
            SoundEngine.instance = new SoundEngine();
        }
        return SoundEngine.instance;
    }

    public init() {
        if (this.enabled) return;

        // Minimalistic "Tick" (10ms of 1000Hz)
        // In a real app, we'd load: src/assets/sounds/click.mp3
        this.clickSound = new Howl({
            src: ['https://actions.google.com/sounds/v1/ui/tap_variant_01.ogg'],
            volume: 0.1,
        });

        this.hoverSound = new Howl({
            src: ['https://actions.google.com/sounds/v1/ui/soft_quick_tap.ogg'],
            volume: 0.05,
        });

        this.enabled = true;
        console.log("[ZUWOS OS] Audio Physicality Initialized");
    }

    public playClick() {
        if (!this.enabled) this.init();
        this.clickSound?.play();
    }

    public playHover() {
        if (!this.enabled) this.init();
        this.hoverSound?.play();
    }
}

export const soundEngine = SoundEngine.getInstance();
