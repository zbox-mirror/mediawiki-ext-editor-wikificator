<?php

namespace MediaWiki\Extension\CMFStore;

use OutputPage, Skin;

/**
 * Class MW_EXT_Key
 */
class MW_EXT_EditorWikificator
{
  /**
   * Load resource function.
   *
   * @param OutputPage $out
   * @param Skin $skin
   *
   * @return bool
   */
  public static function onBeforePageDisplay(OutputPage $out, Skin $skin)
  {
    $out->addModules(['ext.mw.editor-wikificator']);
    $out->addModuleStyles(['ext.mw.editor-wikificator.styles']);

    return true;
  }
}
