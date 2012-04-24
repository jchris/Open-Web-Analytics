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


define('OWA_DTD_BIGINT', 'BIGINT'); 
define('OWA_DTD_INT', 'INT');
define('OWA_DTD_TINYINT', 'TINYINT(1)');
define('OWA_DTD_TINYINT2', 'TINYINT(2)');
define('OWA_DTD_TINYINT4', 'TINYINT(4)');
define('OWA_DTD_SERIAL', 'SERIAL');
define('OWA_DTD_PRIMARY_KEY', 'PRIMARY KEY');
define('OWA_DTD_VARCHAR10', 'VARCHAR(10)');
define('OWA_DTD_VARCHAR255', 'VARCHAR(255)');
define('OWA_DTD_VARCHAR', 'VARCHAR(%s)');
define('OWA_DTD_TEXT', 'MEDIUMTEXT');
define('OWA_DTD_BOOLEAN', 'TINYINT(1)');
define('OWA_DTD_TIMESTAMP', 'TIMESTAMP');
define('OWA_DTD_BLOB', 'BLOB');
define('OWA_DTD_INDEX', 'KEY');
define('OWA_DTD_AUTO_INCREMENT', 'AUTO_INCREMENT');
define('OWA_DTD_NOT_NULL', 'NOT NULL');
define('OWA_DTD_UNIQUE', 'PRIMARY KEY(%s)');
define('OWA_SQL_ADD_COLUMN', 'ALTER TABLE %s ADD %s %s');   
define('OWA_SQL_DROP_COLUMN', 'ALTER TABLE %s DROP %s');
define('OWA_SQL_RENAME_COLUMN', 'ALTER TABLE %s CHANGE %s %s %s'); 
define('OWA_SQL_MODIFY_COLUMN', 'ALTER TABLE %s MODIFY %s %s'); 
define('OWA_SQL_RENAME_TABLE', 'ALTER TABLE %s RENAME %s'); 
define('OWA_SQL_CREATE_TABLE', 'CREATE TABLE IF NOT EXISTS %s (%s) %s'); 
define('OWA_SQL_DROP_TABLE', 'DROP TABLE IF EXISTS %s');  
define('OWA_SQL_INSERT_ROW', 'INSERT into %s (%s) VALUES (%s)');
define('OWA_SQL_UPDATE_ROW', 'UPDATE %s SET %s %s');
define('OWA_SQL_DELETE_ROW', "DELETE from %s %s");
define('OWA_SQL_CREATE_INDEX', 'CREATE INDEX %s ON %s (%s)');
define('OWA_SQL_DROP_INDEX', 'DROP INDEX %s ON %s');
define('OWA_SQL_INDEX', 'INDEX (%s)');
define('OWA_SQL_BEGIN_TRANSACTION', 'BEGIN');
define('OWA_SQL_END_TRANSACTION', 'COMMIT');
define('OWA_DTD_TABLE_TYPE', 'ENGINE = %s');
define('OWA_DTD_TABLE_TYPE_DEFAULT', 'INNODB');
define('OWA_DTD_TABLE_TYPE_DISK', 'INNODB');
define('OWA_DTD_TABLE_TYPE_MEMORY', 'MEMORY');
define('OWA_SQL_ALTER_TABLE_TYPE', 'ALTER TABLE %s ENGINE = %s');
define('OWA_SQL_JOIN_LEFT_OUTER', 'LEFT OUTER JOIN');
define('OWA_SQL_JOIN_LEFT_INNER', 'LEFT INNER JOIN');
define('OWA_SQL_JOIN_RIGHT_OUTER', 'RIGHT OUTER JOIN');
define('OWA_SQL_JOIN_RIGHT_INNER', 'RIGHT INNER JOIN');
define('OWA_SQL_JOIN', 'JOIN');
define('OWA_SQL_DESCENDING', 'DESC');
define('OWA_SQL_ASCENDING', 'ASC');
define('OWA_SQL_REGEXP', 'REGEXP');
define('OWA_SQL_NOTREGEXP', 'NOT REGEXP');
define('OWA_SQL_LIKE', 'LIKE');
define('OWA_SQL_ADD_INDEX', 'ALTER TABLE %s ADD INDEX (%s) %s');
define('OWA_SQL_COUNT', 'COUNT(%s)');
define('OWA_SQL_ROUND', 'ROUND(%s)');
define('OWA_SQL_AVERAGE', 'AVG(%s)');
define('OWA_SQL_DISTINCT', 'DISTINCT %s');
define('OWA_SQL_DIVISION', '(%s / %s)');
define('OWA_DTD_CHARACTER_ENCODING_UTF8', 'utf8');
define('OWA_DTD_TABLE_CHARACTER_ENCODING', 'CHARACTER SET = %s');


require_once("couchbase/Couchbase.php");

/**
 * MySQL Data Access Class
 * 
 * @author      Peter Adams <peter@openwebanalytics.com>
 * @copyright   Copyright &copy; 2006 Peter Adams <peter@openwebanalytics.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GPL v2.0
 * @category    owa
 * @package     owa
 * @version		$Revision$	      
 * @since		owa 1.0.0
 */
class owa_db_couchbase extends owa_db {

	function connect() {
	
		if (!$this->connection) {
		  $cb = new Couchbase;
      $cb->addCouchbaseServer("localhost", 11211, 8092);
		  
		  $this->connection = $cb;
		  
      // new Couchbase("127.0.0.1:8091", "Administrator", "animal", "default");

        // todo connect to couchbase

      // TODO get bucket
            $this->database_selection = true;
      // $this->database_selection = mysql_select_db($this->getConnectionParam('name'), $this->connection);
			
      // if (function_exists('mysql_set_charset')) {
      //  mysql_set_charset('utf8',$this->connection);
      // } else {
      //  $this->query("SET NAMES 'utf8'");
      // }
			
		}
			
			
		if (!$this->connection || !$this->database_selection) {
			$this->e->alert('Could not connect to database.');
			$this->connection_status = false;
			return false;
		} else {
			$this->connection_status = true;
			return true;
		}
	}
	
	
	function makeDoc($params) {
	  $doc = array();
	  if (array_key_exists('set_values', $params)) {
	    foreach ($params['set_values'] as $param) {
	      $doc[$param['name']] = $param['value'];
	    }
	    if (array_key_exists('table', $params)) {
	      $doc['table'] = $params['table'];
	    }
	  }
	  if (!array_key_exists('id', $doc)) {
	    $doc['id'] = sprintf('%d',rand());
	  }
	  return $doc;
	}
	
	/**
	 * Couchbase DB calls
	 * 
	 */
	
	function insert() {
    $doc = $this->makeDoc($this->_sqlParams);
    error_log(sprintf('DB insert JSON: %s', json_encode($doc)), 0);
	  return $this->connection->set($doc['id'], json_encode($doc));
	} 

  // only works on From and Where objects with 1 member
	function getFromTable($from) {
	  foreach ($from as $k => $v) {
      return $v['name'];
		}
	}
	
	function getWhereField($where) {
	  foreach ($where as $k => $v) {
      return $v['name'];
		}
	}
	
	function getWhereValue($where) {
	  foreach ($where as $k => $v) {
      return $v['value'];
		}
	}
	
	function betweenRange($where) {
	  foreach ($where as $k => $v) {
	    if ($v['operator'] == 'BETWEEN') {
        return $v['value']; 
	    }
		}
	}
	
	function getTopURLDocsForSiteAndDay($site_id, $day)  {
	  $view = $this->connection->getView("owa", "yyyymmdd");
	  $yyyymmdd = $day;
    return $view->getResult(array(
      "group" => true,
      "startkey" => array($site_id, $yyyymmdd),
      "endkey" => array($site_id, $yyyymmdd, array())));
	}
	
	function daysOfRange($range) {
	  $days = array();
	  $now = $range["start"];
	  while ($now <= $range["end"]) {
	    $days[] = ''.$now;
	    $now++;
	  }
    return $days;
	}
	
	function getSiteId($where) {	  
    error_log(sprintf('getSiteId: %s', json_encode($where)), 0);
	  foreach ($where as $k => $v) {
	    if (strpos($k,"site_id") !== false) {
        return $v['value'];	      
	    }
		}
	}
	
	function topKURLsForDateRange($k, $range) {
	  // if ($this->length_in_days($range) > 62) {
    //   // use the month view to pull in the middle month
    // }
	  $q = $this->_sqlParams;
    $site_id = $this->getSiteId($q["where"]);
	  
	  $result = array();
    foreach($this->daysOfRange($range) AS $day) {
      $view = $this->getTopURLDocsForSiteAndDay($site_id, $day);
      foreach($view->rows as $row) {
        error_log(sprintf('$row: %s $row->key[2] %s', json_encode($row), json_encode($row->key[2])), 0);
        if (!array_key_exists($row->key[2], $result)) {
          $result[$row->key[2]] = array("name" => $row->key[2], "value" => 0);
        }
        // sum reduce
  			$result[$row->key[2]]["value"] = $result[$row->key[2]]["value"] + $row->value;
      };
		}

		usort($result, create_function('$a,$b','return $b["value"] - $a["value"];'));
		$real = array();
    while (list($key, $value) = each($result)) {
      error_log("\$result[$key]: " . json_encode($value));
      $doc = json_decode($this->connection->get($value["name"]), true);
      error_log(sprintf('doc: %s', json_encode($doc)), 0);
      $real[] = array(
        // "key" => $value["name"],
        "pageViews" => $value["value"],
        "pageTitle" => $doc["page_title"],
        "pageURL" => $doc["url"]
        // "doc" => $doc
      );
    }
		
    error_log(sprintf('getTopURLDocsForSiteAndDay: %s', json_encode(array($site_id, $range, $real))), 0);

    

    return $real;// add them up to get the top K
    // look up the descriptions (including actual url) to do final count
	}
	
	function document_via_document_id($me)  {
	  $q = $this->_sqlParams;
    error_log(sprintf('document_via_document_id: %s', json_encode($q)), 0);
    // we want the requests sliced by foo, and then the documents those requests are requests for.
    $range = $this->betweenRange($q['where']);
    if ($range) {
      error_log(sprintf('document_via_document_id range: %s', json_encode($range)), 0);

      // for each day in range, get top-k urls in terms of # of hits
      return $this->topKURLsForDateRange(10, $range);
    }
    return array("hi");
	}
	
	function select() {
	  $q = $this->_sqlParams;
    // error_log(sprintf('DB select JSON: %s', json_encode($q)), 0);
    if (array_key_exists('joins', $q)) {
      $joins = $q['joins'];
      error_log(sprintf('joins: %s', json_encode($joins)), 0);
      if (array_key_exists('document_via_document_id', $joins)) {
        return $this->document_via_document_id($joins['document_via_document_id']);
      } else {
        return null;
      }
    } else if (array_key_exists('where', $q)) {
      if (count($q['where']) == 1) {
        // fetch by a single field and table
        $view = $this->connection->getView("owa", "table_and_field");
        return $view->getResultByKey(array(
            $this->getFromTable($q['from']), 
            $this->getWhereField($q['where']), 
            $this->getWhereValue($q['where'])
          ), array("include_docs" => true, "stale" => "false"));
      } else {
        error_log(sprintf('Complex select: %s', json_encode($this->_sqlParams)), 0);

        return null;
      }
    } else {
      // no where clause, get them all
      $view = $this->connection->getView("owa", "table_and_field");
      return $view->getResult(array(
        "include_docs" => true, 
        "stale" => "false",
        "startkey" => array($this->getFromTable($q['from'])),
        "endkey" => array($this->getFromTable($q['from']), array())
      ));
    }
	}
	
	function update() {
    error_log(sprintf('DB update JSON: %s', json_encode($this->_sqlParams)), 0);
    // $this->connection->set($doc['id'], json_encode($doc));
	}
	function delete() {
    error_log(sprintf('DB delete JSON: %s', json_encode($this->_sqlParams)), 0);
    // $this->connection->set($doc['id'], json_encode($doc));
	}
	
	/**
	 * Database Query
	 *
	 * @param 	string $sql
	 * @access 	public
	 * 
	 */
	function query($sql) {
    // error_log(sprintf('Couchbase Q: %s', json_encode($this->_sqlParams)), 0);
  	if ($this->connection_status == false):
  	  owa_coreAPI::profile($this, __FUNCTION__, __LINE__);
  		$this->connect();
		  owa_coreAPI::profile($this, __FUNCTION__, __LINE__);
  	endif;
  
  	owa_coreAPI::profile($this, __FUNCTION__, __LINE__);
    // $this->e->debug(sprintf('Query: %s', $sql));
		
		$this->result = '';
		$this->new_result = '';	
		
		
		switch($this->_sqlParams['query_type']) {
			case 'insert':
				$result = $this->insert();
				break;
			case 'select':
				$result = $this->select();
				break;
			case 'update':
				$result = $this->update();
				break;
			case 'delete':
				$result = $this->delete();
				break;
			default:
        error_log(sprintf('Raw query: %s params %s', $sql, json_encode($this->_sqlParams)), 0);
        $result = true;
        break;
		}

    // query log
	  if (array_key_exists('query_type', $this->_sqlParams)) {
      // error_log(sprintf('JSON Query: %s', json_encode($this->_sqlParams)), 0);
  		  $this->connection->set(sprintf('%d',rand()), json_encode($this->_sqlParams));	    
    }
		
    $this->new_result = $result;
		return $this->new_result;
		
	}

	
	function close() {
		
    // @mysql_close($this->connection);
		return;
		
	}
	
	/**
	 * Fetch result set array
	 *
	 * @param 	string $sql
	 * @return 	array
	 * @access  public
	 */
	function get_results($sql) {
	
		$ret = $this->query($sql);
    error_log(sprintf('DB $ret: %s', json_encode($ret)), 0);

		$num_rows = 0;
		
		
		
		if ($ret) {
		  if (is_array($ret)) {
        // ok
		  } else {
        $ret = $ret->rows;
		  }
		}
		
		foreach($ret AS $row) {
		  if (is_array($row)) {
  		  $this->result[$num_rows] = $row;		    
		  } else if ($row->doc) {
  		  $this->result[$num_rows] = get_object_vars($row->doc);		    
		  } else if ($row->value) {
  		  $this->result[$num_rows] = get_object_vars($row->value);		    
		  }
		  $num_rows++;
	  }
		
		if ($this->result):
			return $this->result;
			
		else:
			return null;
		endif;
	}
	
	/**
	 * Fetch Single Row **NOT USED**
	 *
	 * @param string $sql
	 * @return array
	 */
	function get_row($sql) {
		
		$this->query($sql);
		
		//print_r($this->result);
		$row = couchbase.get($this->new_result);
		
		return $row;
	}
	
	/**
	 * Prepares and escapes string
	 *
	 * @param string $string
	 * @return string
	 */
	function prepare($string) {		
		return json_encode($string); 
	}
	
	function getAffectedRows() {
		
    // return mysql_affected_rows();
	}
}

?>
