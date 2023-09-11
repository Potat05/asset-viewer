var $=Object.defineProperty;var z=(e,n,t)=>n in e?$(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var v=(e,n,t)=>(z(e,typeof n!="symbol"?n+"":n,t),t);import{D as H,f as B}from"./2.ec27719f.js";import{s as J,e as N,i as S,A as C,d as b,o as X,M as Y,a as Z,f as P,c as D,g as Q,h as V,j as I,v as j,H as K}from"./scheduler.ac22207c.js";import{S as M,i as _}from"./index.1bb6f5e4.js";import{E as T}from"./EventDispatcher.7485eed3.js";var L=(e=>(e[e.VoiceNoteOff=8]="VoiceNoteOff",e[e.VoiceNoteOn=9]="VoiceNoteOn",e[e.VoiceAftertouch=10]="VoiceAftertouch",e[e.VoiceControlChange=11]="VoiceControlChange",e[e.VoiceProgramChange=12]="VoiceProgramChange",e[e.VoiceChannelPressure=13]="VoiceChannelPressure",e[e.VoicePitchBlend=14]="VoicePitchBlend",e[e.SystemExclusive=15]="SystemExclusive",e))(L||{}),w=(e=>(e[e.SequenceNumber=0]="SequenceNumber",e[e.TextEvent=1]="TextEvent",e[e.CopyrightNotice=2]="CopyrightNotice",e[e.SequenceTrackName=3]="SequenceTrackName",e[e.InstrumentName=4]="InstrumentName",e[e.Lyric=5]="Lyric",e[e.Marker=6]="Marker",e[e.CuePoint=7]="CuePoint",e[e.MIDIChannelPrefix=32]="MIDIChannelPrefix",e[e.EndOfTrack=47]="EndOfTrack",e[e.SetTempo=81]="SetTempo",e[e.SMPTEOffset=84]="SMPTEOffset",e[e.TimeSignature=88]="TimeSignature",e[e.KeySignature=89]="KeySignature",e[e.SequencerSpecificMetaEvent=127]="SequencerSpecificMetaEvent",e))(w||{}),y=(e=>(e[e.Single=0]="Single",e[e.Simultaneous=1]="Simultaneous",e[e.Independent=2]="Independent",e))(y||{});class A extends H{readVLQ(){let n=0;for(let t=0;t<4;t++){const r=this.readNumber("Uint8");if(n=n<<7|r&127,!(r&128))break}return n}readHeader(){this.assertMagic("MThd"),this.assertMagic(6,"Uint32");const n=this.readNumber("Uint16");if(!(n in y))throw new Error("MIDI header invalid format.");const t=this.readNumber("Uint16");if(n==0&&t!=1)throw new Error("MIDI header invalid format.");const r=this.readNumber("Uint16");if(r&32768){const a=(r&32512)>>8,i=r&255;return{format:n,numTracks:t,divFormat:"timecode",negativeSMPTEFormat:a,ticksPerFrame:i}}else return{format:n,numTracks:t,divFormat:"metrical",ticksPerQuarterNote:r}}readEvent(n,t){const r=(t&240)>>4,a=t&15;let i;switch(r){case 8:i={note:this.readVLQ(),velocity:this.readVLQ()};break;case 9:i={note:this.readVLQ(),velocity:this.readVLQ()};break;case 10:i={note:this.readVLQ(),pressure:this.readVLQ()};break;case 11:i={controller:this.readVLQ(),value:this.readVLQ()};break;case 12:i={program:this.readVLQ()};break;case 13:i={pressure:this.readVLQ()};break;case 14:i={pitch:this.readVLQ()<<7&this.readVLQ()};break;case 15:i={data:this.readBuffer(this.readVLQ())};break;default:throw new Error("Failed reading midi event.")}return{meta:!1,dt:n,type:r,channel:a,...i}}readMetaEvent(n){const t=this.readNumber("Uint8"),r=this.readVLQ(),a=this.pointer;let i;switch(t){case 0:i={sequence:this.readNumber("Uint16")};break;case 1:i={text:this.readString(r,"utf-8")};break;case 2:i={copyright:this.readString(r,"utf-8")};break;case 3:i={name:this.readString(r,"utf-8")};break;case 4:i={instrument:this.readString(r,"utf-8")};break;case 5:i={lyric:this.readString(r,"utf-8")};break;case 6:i={marker:this.readString(r,"utf-8")};break;case 7:i={description:this.readString(r,"utf-8")};break;case 32:i={channel:this.readNumber("Uint8")};break;case 47:i={};break;case 81:i={tempo:this.readCustomNumber(3,!1)};break;case 84:i={hour:this.readNumber("Uint8"),minute:this.readNumber("Uint8"),second:this.readNumber("Uint8"),frame:this.readNumber("Uint8"),fractionalFrame:this.readNumber("Uint8")};break;case 88:i={numerator:this.readNumber("Uint8"),denominator:Math.pow(2,this.readNumber("Uint8")),clocks:this.readNumber("Uint8"),notes:this.readNumber("Uint8")};break;case 89:i={signature:this.readNumber("Int8"),key:this.readNumber("Uint8")==0?"major":"minor"};break;case 127:{console.log("MIDI Skipped sequencer specific meta event."),i={data:this.readBuffer(r)};break}default:i={data:this.readBuffer(r)};break}if(this.pointer<a+r)console.warn(`Meta event ${w[t]} has invalid length.`),this.pointer=a+r;else if(this.pointer>a+r)throw new Error(`Meta event ${w[t]} length is too small for data.`);return{meta:!0,dt:n,type:t,...i}}readTrack(){this.assertMagic("MTrk");const n=this.readNumber("Uint32"),t=this.pointer;let r=[],a=0;for(;this.pointer-t<n;){const i=this.readVLQ();let s=this.readNumber("Uint8");s>128?a=s:(s=a,this.pointer--);const o=s==255?this.readMetaEvent(i):this.readEvent(i,s);if(r.push(o),o.meta&&o.type==47)break}return r}}function E(e){const n=new A(e);n.endianness=H.BIG_ENDIAN;const t=n.readHeader(),r=n.readArray(n.readTrack,t.numTracks);return{...t,tracks:r}}const g=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class x{constructor(n){v(this,"value");if(this.value=n,this.value<0||this.value>127||!Number.isInteger(this.value))throw new Error(`Invalid MIDI note. "${this.value}"`)}static fromNote(n){const[t,r]=n.split(" ");if(!t||!r)throw new Error(`Failed to convert note to midi note. "${n}"`);const a=parseInt(r);if(Number.isNaN(a))throw new Error(`Failed to convert note to midi note. "${n}"`);return new x(g.indexOf(t)+(a+1)*g.length)}getNote(){return`${g[this.value%g.length]} ${Math.floor(this.value/g.length)-1}`}}class ee extends T{constructor(t){super();v(this,"division");v(this,"tempo",120);v(this,"tracks");v(this,"_currentTick",0);if(t.format!=y.Single&&t.format!=y.Simultaneous)throw new Error(`Cannot play MIDI format "${y[t.format]}"`);if(t.divFormat!="metrical")throw new Error(`Cannot play time div format "${t.divFormat}"`);this.division=t.ticksPerQuarterNote,this.tracks=t.tracks.map(r=>{let a=0;return{index:0,finished:!1,events:r.map(i=>(a+=i.dt,{...i,acc:a})),totalTicks:a}})}get currentTick(){return this._currentTick}get totalTicks(){return this.tracks.reduce((t,r)=>r.totalTicks>t?r.totalTicks:t,0)}getTickMs(t){const r=6e7/this.tempo;return t*(6e4/(r*this.division))}finished(){return this.tracks.every(t=>t.finished)}tick(){let t=0;for(;t==0;){for(let r=0;r<this.tracks.length;r++){const a=this.tracks[r];if(a.finished)continue;const i=a.events[a.index];if(!(i.acc>this._currentTick)){if(i.meta==!1)i.type==L.VoiceNoteOn?this.dispatchEvent("note",new x(i.note),i.velocity,i.channel,r):i.type==L.VoiceNoteOff&&this.dispatchEvent("note",new x(i.note),i.velocity,i.channel,r);else if(i.type==w.SetTempo)this.tempo=i.tempo;else if(i.type==w.EndOfTrack){a.finished=!0;continue}if(a.index++,a.index>=a.events.length)throw new Error("MIDI player got to end of events without an end of track event.")}}t=this.tracks.reduce((r,a)=>{if(a.finished)return r;const i=a.events[a.index];return i.dt<r?i.dt:r},1/0),this._currentTick+=t}return this.getTickMs(t)}}function G(e){let n,t,r;function a(o,u){return o[2]?te:re}let i=a(e),s=i(e);return{c(){s.c(),n=Z(),t=P("progress"),this.h()},l(o){s.l(o),n=D(o),t=Q(o,"PROGRESS",{max:!0}),V(t).forEach(b),this.h()},h(){t.value=r=Math.floor(e[1]/e[0].totalTicks*100),I(t,"max",100)},m(o,u){s.m(o,u),S(o,n,u),S(o,t,u)},p(o,u){i===(i=a(o))&&s?s.p(o,u):(s.d(1),s=i(o),s&&(s.c(),s.m(n.parentNode,n))),u&3&&r!==(r=Math.floor(o[1]/o[0].totalTicks*100))&&(t.value=r)},d(o){o&&(b(n),b(t)),s.d(o)}}}function te(e){let n,t="Pause",r,a;return{c(){n=P("button"),n.textContent=t},l(i){n=Q(i,"BUTTON",{"data-svelte-h":!0}),j(n)!=="svelte-wbaw1e"&&(n.textContent=t)},m(i,s){S(i,n,s),r||(a=K(n,"click",e[4]),r=!0)},p:C,d(i){i&&b(n),r=!1,a()}}}function re(e){let n,t="Play",r,a;return{c(){n=P("button"),n.textContent=t},l(i){n=Q(i,"BUTTON",{"data-svelte-h":!0}),j(n)!=="svelte-1pf6n9o"&&(n.textContent=t)},m(i,s){S(i,n,s),r||(a=K(n,"click",e[3]),r=!0)},p:C,d(i){i&&b(n),r=!1,a()}}}function ne(e){let n,t=e[0]&&G(e);return{c(){t&&t.c(),n=N()},l(r){t&&t.l(r),n=N()},m(r,a){t&&t.m(r,a),S(r,n,a)},p(r,[a]){r[0]?t?t.p(r,a):(t=G(r),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},i:C,o:C,d(r){r&&b(n),t&&t.d(r)}}}function ie(e){return 440*2**((e-69)/12)}function ae(e,n,t){let{entry:r}=n,a,i=0,s=!1,o=-1;function u(){if(!s)return;t(1,i=a.currentTick);const c=a.tick();clearTimeout(o),o=setTimeout(()=>u(),c)}function W(){t(2,s=!0),u()}function O(){for(t(2,s=!1);m.length>0;){const c=m[0];q(c.note,c.channel,c.track)}clearTimeout(o)}let h,m;function R(c,p,k,f){const l=h.createGain();l.connect(h.destination),l.gain.value=1e-4,l.gain.exponentialRampToValueAtTime(5e-4*p,h.currentTime+.01);const d=h.createOscillator();d.connect(l),d.type="triangle",d.frequency.value=ie(c.value),d.start(),m.push({gain:l,osc:d,note:c,channel:k,track:f})}function q(c,p,k){const f=m.findIndex(U=>U.note.value==c.value&&U.channel==p&&U.track==k);if(f==-1)return;const l=m.splice(f,1)[0],{gain:d,osc:F}=l;d.gain.setValueAtTime(d.gain.value,h.currentTime),d.gain.exponentialRampToValueAtTime(1e-4,h.currentTime+.1),setTimeout(()=>{d.disconnect(),F.stop(),F.disconnect()},100)}return X(async()=>{const c=E(await r.buffer());t(0,a=new ee(c)),h=new AudioContext,m=[],a.addEventListener("note",async(p,k,f,l)=>{k>0?R(p,k,f,l):q(p,f,l)})}),Y(()=>{O(),a.destroyDispatcher()}),e.$$set=c=>{"entry"in c&&t(5,r=c.entry)},[a,i,s,W,O,r]}class se extends M{constructor(n){super(),_(this,n,ae,ne,J,{entry:5})}}const he={namespace:"midi.midi",priority:2,isValid:async e=>e.type!=B.File?!1:e.name.endsWith(".mid")||e.name.endsWith(".midi"),createViewer:async(e,n)=>{if(e.type==B.File)new se({target:n,props:{entry:e}});else throw new Error("Tried to create midi viewer with directory.")},getIcon:async()=>"/asset-viewer/bootstrap-icons/file-earmark-music.svg"};export{he as default};
