# akshara_tokenizer
A tokenizer to convert Kannada String into a list of Kannada Akṣaras. Along with splitting, it also seggregates an Akṣara into its constituent parts.

## Working
A regular expression is used match Kannada akṣaras. Regions of interest are extracted using capturing groups. The [blog](https://vinayakakv.github.io/posts/decoding-aksharas/) explains the synthesis of regular expression and meaning of its parts in detail.

## Including the script in your webpage
The decoder is written as a ES6 Module, which you need to [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in your code. This can be done as follows.
```js
<script type="module">
        import {AksharaTokenizerKannada} from 'https://cdn.jsdelivr.net/gh/vinayakakv/akshara_tokenizer/akshara_tokenizer.js'
        .
        .
        .
</script>
```

## Documentation
First of all, you have to create an `AksharaTokenizerKannada` instance. 
```js
  tokenizer = new AksharaTokenizerKannada();
```
You can then call its `tokenize(string)->string` method
- Input is a string in Kannada script
- Output is a list of tokens, where each token is an dictionary of the form 
    ```js
    {
      "svara": // svara part of akshara,
      "samyukta": // saṃyukta part of vyaṃjana,
      "vyamjana": //core vyaṃjana,
      "gunita": // guṇita of vyaṃjana,
      "virama": //virāma of whole vyaṃjana
      "yogawaha": //either yogavāha of whole akṣara
    }
    ```
Note that all of the fields of the token dictionary need not be having values simultaneously. In particular,
- the presence of `svara` means the absence of all other fields, with `yogawaha` being an exception in some cases
- the presence of `vyanjana` means the absence of `swara`

## Usages
This project is being used in 
- [Kaṭapayādi decoder](https://vinayakakv.github.io/katapayadi_decoder/)

If you are using it in your project, you can submit a pull request to include it in the list!

## Contributing
Contributions are welcome in the form of bugfixes to the core decoder, and, extending it to other scripts without using any transcription service (e.g., by passing a script identifier to the constructor).
