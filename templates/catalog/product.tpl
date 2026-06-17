{**
 * Hummingbird Child — block-level template override example.
 *
 * {extends file='parent:...'} pulls the PARENT theme's template and lets us
 * redefine a single {block}: everything outside it keeps following the
 * parent template, including future parent updates.
 * {$smarty.block.parent} renders the original block content.
 *}
{extends file='parent:catalog/product.tpl'}

{block name='product_description_short'}
  {$smarty.block.parent}
  <p class="child-badge">Block-level override from the Hummingbird Child theme</p>
{/block}
