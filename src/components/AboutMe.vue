<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="Profile Picture"
            class="rounded-circle mb-4"
            width="150"
            height="150"
          />
          <h1 class="display-4">{{ $t('profile.greeting') }}</h1>
          <p class="lead text-muted">
            {{ $t('profile.introduction') }}
          </p>
          <hr />
          <h2 class="h5 mt-4">{{ $t('profile.whatIDo') }}</h2>
          <p>
            {{ $t('profile.description') }}
          </p>
          <div class="d-flex justify-content-center gap-3">
            <a
              href="assets/CV-Moises.pdf"
              class="btn btn-primary"
              role="button"
              download="CV-Moises.pdf"
            >
            {{ $t('profile.downloadCV') }}
            </a>

            <router-link to="/contact"
              class="btn btn-outline-secondary"
              role="button"
              >{{ $t('profile.contactMe') }}</router-link
            >
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 text-center">
          <i class="bi bi-code-slash display-4 text-primary"></i>
          <h3 class="h5 mt-3">{{ $t('profile.webDevelopmentTitle') }}</h3>
          <p>
            {{ $t('profile.webDevelopmentDescription') }}
          </p>
        </div>
        <div class="col-md-4 text-center">
          <i class="bi bi-phone display-4 text-primary"></i>
          <h3 class="h5 mt-3">{{ $t('profile.mobileAppsTitle') }}</h3>
          <p>
            {{ $t('profile.mobileAppsDescription') }}
          </p>
        </div>
        <div class="col-md-4 text-center">
          <i class="bi bi-back display-4 text-primary"></i>
          <h3 class="h5 mt-3">{{ $t('profile.backendTitle') }}</h3>
          <p>
            {{ $t('profile.backendDescription') }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  img {
    object-fit: cover;
  }
  </style>
  