## Code Review Exercise

### Issue #1: Code Correctness and HTML Semantics (Submit Button Outside Form)

The issue, why this is an issue, and the solution:

The submit and reset buttons are located entirely outside of the `<form>` element. In HTML, an input with `type="submit"` must be nested inside a `<form>` (or linked via a `form` ID attribute) in order to actually gather the input data and trigger the form submission. As it is currently written, clicking the submit button will do absolutely nothing. To fix this, we simply need to move the closing `</form>` tag so that the button container `div` is safely wrapped inside of it.

Initial code:

```html
<label class="form-label" for="message"
          >Feel free to leave a message to us</label
        >
        <textarea
          class="form-textarea form-element-container"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <div
        class="form space-evenly-distributed-row-container form-buttons-container"
      >
        <input class="form-button" type="submit" value="submit" />
        <input class="form-button" type="reset" value="reset" />
      </div>
```

Updated code:

```html
<label class="form-label" for="message"
          >Feel free to leave a message to us</label
        >
        <textarea
          class="form-textarea form-element-container"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>

        <div
          class="form space-evenly-distributed-row-container form-buttons-container"
        >
          <input class="form-button" type="submit" value="submit" />
          <input class="form-button" type="reset" value="reset" />
        </div>
      </form>
```

### Issue #2: JavaScript Implementation Bug (Overwriting DOM Classes)

The issue, why this is an issue, and the solution:

In the `index.js` file, when the `fetchCatFacts` function finishes loading data, it attempts to hide the loading icon using `loading.setAttribute('class', 'display-none')`. The issue is that `setAttribute('class', ...)` completely erases and replaces any existing classes on that element, wiping out its original `loading-container` class. If the page attempts to fetch data again (or if that class is needed for CSS styling), the script will crash because `document.querySelector('.loading-container')` will return `null`. The correct solution is to use the `classList.add()` method to append the new hidden class without destroying the old ones.

Initial code:

```javascript
  } finally {
    const loading = document.querySelector('.loading-container');
    loading.setAttribute('class', 'display-none');
  }
```

Updated code:

```javascript
} finally {
    const loading = document.querySelector('.loading-container');
    loading.classList.add('display-none');
  }
```
