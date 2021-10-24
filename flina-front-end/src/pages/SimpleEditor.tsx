import React, { useCallback, useState } from 'react'

// The editor core
import type { Value } from '@react-page/editor'
import Editor from '@react-page/editor'

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
// import '@react-page/editor/lib/index.css';

// The rich text area plugin
import slate from '@react-page/plugins-slate'
// image
import {imagePlugin} from '@react-page/plugins-image';
import spacers from '@react-page/plugins-spacer'
import background, { ModeEnum } from '@react-page/plugins-background'
import divder from '@react-page/plugins-divider'
import {ImageUploaded} from "@react-page/editor/lib/ui/ImageUpload/types"
import video from '@react-page/plugins-video'
import htmlVideo from '@react-page/plugins-html5-video'

// Stylesheets for the rich text area plugin
// uncomment this
import '@react-page/plugins-slate/lib/index.css';

// Stylesheets for the imagea plugin
import '@react-page/plugins-image/lib/index.css';
import { demoSimpleReadOnly } from '../commons/constant'
import PageLayout from '../layout/PageLayout'
import "./Editor.css"
// Define which plugins we want to use.

function uploadImageShim(defaultUrl: string): any  {
  return function (file: File, reportProgress: (progress: number) => void): Promise<ImageUploaded> {
    return new Promise<ImageUploaded> (resolve => {
      setTimeout(() => {
        resolve({ url: defaultUrl });
      }, 2000);
    });
  };
};

const cellPlugins: any[] = [
  slate(), 
  imagePlugin(),
  spacers,
  divder,
  background({
    enabledModes:
      ModeEnum.COLOR_MODE_FLAG |
      ModeEnum.IMAGE_MODE_FLAG |
      ModeEnum.GRADIENT_MODE_FLAG,
  }),
  htmlVideo,
  video
]



const TRANSLATIONS: { [key: string]: string } = {
  'Edit blocks': '编辑',
  'Add blocks': '添加',
  'Move blocks': '移动',
  'Resize blocks': '调整大小',
  'Preview blocks': '预览模式',
};

export default function SimpleExample() {
  const [value, setValue] = useState<Value>(demoSimpleReadOnly)
  const pageName = 'editor'
  const uiTranslator = useCallback((label: string) => {
    if (TRANSLATIONS[label] !== undefined) {
      return TRANSLATIONS[label];
    }
    return `${label}(to translate)`;
  }, []);
  return (
    <PageLayout>
      <div id="special">
        <Editor uiTranslator={uiTranslator} cellPlugins={cellPlugins} value={value} onChange={setValue} />
      </div>
    </PageLayout>
  )
}
