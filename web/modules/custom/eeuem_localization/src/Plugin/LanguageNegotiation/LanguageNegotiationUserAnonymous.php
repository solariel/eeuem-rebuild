<?php

namespace Drupal\eeuem_localization\Plugin\LanguageNegotiation;

use Drupal\language\LanguageNegotiationMethodBase;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class for setting ukrainian language for anonymous users.
 *
 * @LanguageNegotiation(
 *   id = \Drupal\eeuem_localization\Plugin\LanguageNegotiation\LanguageNegotiationUserAnonymous::METHOD_ID,
 *   weight = -4,
 *   name = @Translation("Ukrainian for anonymous users"),
 *   description = @Translation("Follow the user's language preference.")
 * )
 */
class LanguageNegotiationUserAnonymous extends LanguageNegotiationMethodBase {

  /**
   * The language negotiation method id.
   */
  const METHOD_ID = 'language-user-anonymous';

  /**
   * {@inheritdoc}
   */
  public function getLangcode(Request $request = NULL) {
    $langcode = NULL;

    // User preference (only for authenticated users).
    if ($this->languageManager && !$this->currentUser->isAuthenticated()) {
      $langcode = 'uk';
    }

    // No language preference from the user.
    return $langcode;
  }

}
