// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
// instruments
import { ekirwanInstrument } from './instruments/ekirwan';
import { ViolinInstrument1 } from './instruments/kk3v1n';
// import { AnselInstrument } from './instruments/ngaiansel';
import { nnfpInstrument } from './instruments/nnfp'; 
// visualizers
import { ekirwanVisualizer } from './visualizers/ekirwan';
import { KevinVisualizer } from './visualizers/kk3v1n';
import { AnselVisualizer } from './visualizers/ngaiansel';
import { nnfpVisualizer } from './visualizers/nnfp';

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument, ekirwanInstrument, ViolinInstrument1, nnfpInstrument]);
const visualizers = List([WaveformVisualizer, ekirwanVisualizer, KevinVisualizer, AnselVisualizer, nnfpVisualizer]);

export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});