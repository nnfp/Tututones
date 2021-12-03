// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';
import { KevinVisualizer } from './visualizers/kk3v1n';
import { nnfuVisualizer } from './visualizers/nnfu';

import {ViolinInstrument1} from './instruments/test';

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

const instruments = List([PianoInstrument, ViolinInstrument1]);
const visualizers = List([WaveformVisualizer, KevinVisualizer, nnfuVisualizer]);
export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
