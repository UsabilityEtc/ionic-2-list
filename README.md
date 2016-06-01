# ionic-2-list

`ionic-2-list` is an example Ionic 2 app written in TypeScript for listing items. This app demonstrates the following:

* Listing items and navigating to a detail view for each item.
* Filtering out items that don't match a search query.
* Adding new items with a modal view.
* Deleting items with a swipe left gesture.
* Loading data from an asynchronous service.
* Mocking data with a local JSON file.
* Injecting a data service.

## Browser Preview

After cloning the `ionic-2-list` repository, run `npm install` to download the app's Node.js dependencies.

Next, run the `ionic serve` command to preview the app in a browser. Add the `--lab` flag to see iOS and Android side by side in the browser:

`ionic serve --lab`

## Emulating iOS

Issue the following commands to run the `ionic-2-list` app in the Xcode iOS simulator:

```
ionic platform add ios
ionic build ios
ionic emulate ios
```

You will need to install [Xcode](https://developer.apple.com/xcode/) to emulate iOS.

## Emulating Android

Issue the following commands to run the `ionic-2-list` app in the Android simulator:

```
ionic platform add android
ionic build android
ionic emulate android
```

You will need to install the [Android SDK](https://developer.android.com/studio/index.html) to emulate Android.
