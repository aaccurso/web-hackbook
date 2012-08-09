# Hackbook for Web

Hackbook for Web shows a lot of Facebook Platform's functionality including Graph API, checking a user in, and posting to their Timeline.  It's optimized for a mobile display.

Authors: Matt Kelly (mattwkelly)

## Demo

http://www.fb.me/fbhackbook

## Installing

- Create Facebook application at http://developers.facebook.com/apps and set Application Settings
- Change gAppID in js/_config.js
- In all files, replace "http://apps.facebook.com/mobile-start/" with the Canvas URL you entered in Application Settings
- In all files, replace "http://www.facebookmobileweb.com/hackbook/" with the Canvas URL you entered in Application Settings
- Upload files to your server
- Visit the URL where you uploaded the files

Note: Credits will not work out of the box since it requires server-side integration.  See the docs at https://developers.facebook.com/docs/creditsapi/ for a tutorial that describes setting up Credits.

## Documentation

All documentation for Platform on Mobile Web is at https://developers.facebook.com/docs/mobile/web/build/

## Additional Resources

- There are a large amount of comments in the HTML and Javascript files.  It's highly recommended that you poke around those files.
- console.log() (http://getfirebug.com/logging) statements are scattered throughought all of the example.  You can view these in Firebug, iPhone Safari, Android, Chrome, etc.  See below for more info.
- Debugging in iPhone Safari: http://developer.apple.com/library/safari/#documentation/appleapplications/Conceptual/Safari_Developer_Guide/DebuggingYourWebsite/DebuggingYourWebsite.html
- Debugging in Android Web Browser: http://developer.android.com/guide/webapps/debugging.html
- Debugging in Chrome: http://www.google.com/chrome/intl/en/webmasters-faq.html#testrender
- Debugging in Safari (desktop): http://mactips.info/2010/07/use-safari-5s-web-inspector
- Debugging in Firefox: http://getfirebug.com/
- Debuging in Internet Exploer: http://msdn.microsoft.com/en-us/library/dd565628(v=vs.85).aspx
- Debugging on mobile devices: http://pmuellr.github.com/weinre/
- For general support, see https://developers.facebook.com/support/

## Contributing

All contributors must agree to and sign the [Facebook CLA](https://developers.facebook.com/opensource/cla) prior to submitting Pull Requests. We cannot accept Pull Requests until this document is signed and submitted.

## License

Copyright 2012-present Facebook, Inc.

You are hereby granted a non-exclusive, worldwide, royalty-free license to use, copy, modify, and distribute this software in source code or binary form for use in connection with the web services and APIs provided by Facebook.

As with any software that integrates with the Facebook platform, your use of this software is subject to the Facebook Developer Principles and Policies [http://developers.facebook.com/policy/]. This copyright notice shall be included in all copies or substantial portions of the software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.