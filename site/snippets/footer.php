<?php $entry = "templates/" . $page->template() . "/index.js"; ?>

<!-- Include the shared js ... -->
<?= vite()->js() ?>
<!-- ... and the template's js (if it exists) -->
<?php e(isset(vite()->manifest()[$entry]), vite()->js($entry)) ?>
</body>

</html>