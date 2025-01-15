# Todo(s):

- Isolate Google Analytics into its own component and away from \_document.js to resolve slow page load and potential performance issues

```js
{
	/* TODO: how do we isolate this onto its own file? */
}
{
	/* Global site tag (gtag.js) - Google Analytics */
}
{
	/* <script
	async
	src="https://www.googletagmanager.com/gtag/js?id=G-1WW5F0M4MQ"
></script>
<script
	dangerouslySetInnerHTML={{
		__html: `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-1WW5F0M4MQ');
	`,
	}}
/> */
}
```

- Add dark / light modes on your site
-
