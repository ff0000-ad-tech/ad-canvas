<a name="CanvasTiling"></a>

## CanvasTiling
**Kind**: global class  
**Npmpackage**:   

* [CanvasTiling](#CanvasTiling)
    * [new CanvasTiling()](#new_CanvasTiling_new)
    * [.X](#CanvasTiling.X) : <code>string</code>
    * [.Y](#CanvasTiling.Y) : <code>string</code>
    * [.XY](#CanvasTiling.XY) : <code>string</code>
    * [.NONE](#CanvasTiling.NONE) : <code>string</code>

<a name="new_CanvasTiling_new"></a>

### new CanvasTiling()
Custom constants to identify how patterns will repeat.<br>
<pre class="sunlight-highlight-javascript">
import { CanvasTiling } from 'ad-canvas'
</pre>

<a name="CanvasTiling.X"></a>

### CanvasTiling.X : <code>string</code>
Represents 'repeat-x'. Used for fillStyle patterns with only horizontal repetiion (infinite columns, 1 rows).

**Kind**: static constant of [<code>CanvasTiling</code>](#CanvasTiling)  
**Example**  
```js
CanvasTiling.X
```
<a name="CanvasTiling.Y"></a>

### CanvasTiling.Y : <code>string</code>
Represents 'repeat-y'. Used for fillStyle patterns with only vertical repetiion (1 column, infinite rows).

**Kind**: static constant of [<code>CanvasTiling</code>](#CanvasTiling)  
**Example**  
```js
CanvasTiling.Y
```
<a name="CanvasTiling.XY"></a>

### CanvasTiling.XY : <code>string</code>
Represents 'repeat'. Used for patterns which repeat infinitely vertically and horizontally.

**Kind**: static constant of [<code>CanvasTiling</code>](#CanvasTiling)  
**Example**  
```js
CanvasTiling.XY
```
<a name="CanvasTiling.NONE"></a>

### CanvasTiling.NONE : <code>string</code>
Represents 'no-repeat'. Used for fillStyle patterns with no repetition.

**Kind**: static constant of [<code>CanvasTiling</code>](#CanvasTiling)  
**Example**  
```js
CanvasTiling.NONE
```
