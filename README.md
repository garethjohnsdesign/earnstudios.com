# EARN Studios

Static site powered by Jekyll.

How to run locally

- Option A — Local (recommended)
  1. Install Ruby via rbenv (macOS):
     - brew install rbenv ruby-build
     - rbenv install 3.2.2
     - rbenv local 3.2.2  # in this project folder
     - gem install bundler
  2. Install gems into the project vendor directory:
     - bundle config set --local path 'vendor/bundle'
     - bundle install
  3. Serve the site:
     - bundle exec jekyll serve --livereload
  4. Open http://127.0.0.1:4000

- Option B — Docker (no local Ruby needed)
  1. Install Docker Desktop.
  2. From the project root, run:
     - docker run --rm \
         -p 4000:4000 \
         -v "$PWD":/srv/jekyll \
         -v "$PWD/_site":/srv/jekyll/_site \
         jekyll/jekyll:4 \
         bash -lc "bundle config set path vendor/bundle && bundle install && jekyll serve --host 0.0.0.0 --livereload"
  3. Open http://localhost:4000

Notes

- This repo is configured for Jekyll 4.x and Ruby 3.x. Serving requires WEBrick, provided via the Gemfile.
- If you change gems, re-run bundle install.

—

Copyright (c) 2018–2025 Gareth Johns Design + Development – info@garethjohnsdesign.com