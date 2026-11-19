// Web Audio API Synthesizer for Atmospheric Cinematic Soundscapes
class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private intervalId: NodeJS.Timeout | null = null;
  private activeOscillators: OscillatorNode[] = [];

  // Ethereal chord frequencies (Fmaj9, Cmaj7, Dm9, Am7)
  private chords = [
    [174.61, 220.0, 261.63, 329.63, 392.0], // Fmaj9
    [130.81, 164.81, 196.0, 246.94, 293.66], // Cmaj9
    [146.83, 174.61, 220.0, 261.63, 329.63], // Dm9
    [110.0, 130.81, 164.81, 196.0, 246.94], // Am7
  ];

  // Chime frequencies (celestial overtone series)
  private chimeNotes = [523.25, 659.25, 783.99, 987.77, 1046.5, 1318.51, 1567.98];
  private currentChordIndex = 0;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);

      // Lowpass filter for warm, dreamy texture
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.frequency.setValueAtTime(450, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(1.5, this.ctx.currentTime);

      this.gainNode.connect(this.filterNode);
      this.filterNode.connect(this.ctx.destination);
    }
  }

  public async start(): Promise<boolean> {
    if (this.isPlaying) return true;

    try {
      this.initContext();
      if (!this.ctx || !this.gainNode) return false;

      if (this.ctx.state === "suspended") {
        await this.ctx.resume();
      }

      this.isPlaying = true;

      // Smooth fade in
      this.gainNode.gain.cancelScheduledValues(this.ctx.currentTime);
      this.gainNode.gain.setValueAtTime(0, this.ctx.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 3);

      this.playChordCycle();
      this.intervalId = setInterval(() => {
        if (this.isPlaying) {
          this.playChordCycle();
        }
      }, 7000);

      return true;
    } catch (e) {
      console.warn("Audio Context init blocked until user gesture", e);
      return false;
    }
  }

  private playChordCycle() {
    if (!this.ctx || !this.gainNode || !this.isPlaying) return;

    const chord = this.chords[this.currentChordIndex];
    this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;

    const now = this.ctx.currentTime;

    // Play pad drones
    chord.forEach((freq, i) => {
      if (!this.ctx || !this.gainNode) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = i % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, now);
      // Subtle micro-detune for lush warmth
      osc.detune.setValueAtTime((Math.random() - 0.5) * 8, now);

      oscGain.gain.setValueAtTime(0, now);
      oscGain.gain.linearRampToValueAtTime(0.025 / (i + 1), now + 2);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 7);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + 7.2);
    });

    // Random celestial bell/chime
    if (Math.random() > 0.3) {
      setTimeout(() => {
        this.playChime();
      }, 1500 + Math.random() * 2000);
    }
  }

  public playChime(freqIndex?: number) {
    if (!this.ctx || !this.gainNode || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();

    const note =
      freqIndex !== undefined
        ? this.chimeNotes[freqIndex % this.chimeNotes.length]
        : this.chimeNotes[Math.floor(Math.random() * this.chimeNotes.length)];

    osc.type = "sine";
    osc.frequency.setValueAtTime(note, now);

    chimeGain.gain.setValueAtTime(0, now);
    chimeGain.gain.linearRampToValueAtTime(0.04, now + 0.05);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

    osc.connect(chimeGain);
    chimeGain.connect(this.gainNode);

    osc.start(now);
    osc.stop(now + 3.6);
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.gainNode) return;

    const now = this.ctx.currentTime;
    this.gainNode.gain.cancelScheduledValues(now);
    this.gainNode.gain.linearRampToValueAtTime(0.0001, now + 1.5);

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    setTimeout(() => {
      this.isPlaying = false;
    }, 1600);
  }

  public toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return Promise.resolve(false);
    } else {
      return this.start();
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientAudio = typeof window !== "undefined" ? new AmbientAudioEngine() : null;
