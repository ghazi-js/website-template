<?php

foreach ($scripts as $script) {
    echo '<script defer src="' . $js . $script . '"></script>';
}

echo <<<EOT
<noscript>
        <!-- Modal -->
        <div class="modal fade show bg-white">
            <div class="modal-dialog show modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Javascript Required</h5>
                    </div>
                    <div class="modal-body">
                        <p>Javascript seems to be disabled. This will break some site features.</p>
                        <p>To enable JavaScript click <a href="//enable-javascript.com/" rel="noopener" class="d-inline-block" aria-label="Enable JavaScript">here</a></p>
                    </div>
                </div>
            </div>
        </div>
</noscript>
</body>

</html>
EOT;

?>