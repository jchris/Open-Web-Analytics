<?php
//
// Open Web Analytics - An Open Source Web Analytics Framework
//
// Copyright 2006 Peter Adams. All rights reserved.
//
// Licensed under GPL v2.0 http://www.gnu.org/copyleft/gpl.html
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// $Id$
//

/**
 * Session Timestamp metric
 * 
 * @license     http://www.gnu.org/copyleft/gpl.html GPL v2.0
 */

class owa_timestamp extends owa_metric {

	function __construct() {
		$this->setName('timestamp');
		$this->setLabel('timestamp');
		$this->setEntity('base.session');
		//$this->setEntity('base.request');
		$this->setColumn('timestamp');
		$this->setSelect(sprintf("%s", $this->getColumn()));
		$this->setDataType('integer');
		return parent::__construct();
	}
}

?>
